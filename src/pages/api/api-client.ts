import { logger } from '@/helpers/logger';
import { Configuration, FileuploadServiceApiFactory, TrainingJobApiFactory, TenantApiFactory, SessionApiFactory, WebApiFactory, MobileApiFactory } from '@/services';
import axios from 'axios';
import { log } from 'console';
import { Session } from 'next-auth';

export class CoreAPIClient {
  private axiosInstance = axios.create();
  public CLIENT_ID = "LI-WEB";
  public ACCESS_TOKEN = 'accesstoken_default';
  // configuration, base path, axios instance

  private apiConfig = new Configuration({ accessToken: '' });

  // TODO: get this from the environment file (local,dev,qa)
  private basePath = '/api';

  private session: any;

  constructor() {
    this.setupResponseIntercepter();
  }

  public setAuthConfigs(conf: Configuration) {
    this.apiConfig = conf;
  }

  public DashbordAPI(s: Session | null) {
    // Set the AUTH token for any request
    if (s?.user) {
      this.session = s.user;
      this.apiConfig.accessToken = this.ACCESS_TOKEN;
    }

    //return DashboardApiFactory(this.apiConfig, this.basePath, this.axiosInstance);
  }

  private setupResponseIntercepter() {
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const config = error?.config;

        const originalRequest = error.config;
        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = this.session.qRefreshToken;
            const response = await axios.post('/api/refresh-token', { refreshToken });
            const { token } = response.data;

            //TODO: update session data in next-auth

            // Retry the original request with the new token
            originalRequest.headers.Authorization = `Bearer ${token}`;

            // logger.log("freeee", originalRequest.headers.Authorization)

            return axios(originalRequest);
          } catch (error) {
            // Handle refresh token error or redirect to login

          }
        }
      }
    );
  }

  public ResourcesAPI() {
    return FileuploadServiceApiFactory(this.apiConfig, this.basePath, this.axiosInstance);
  }

  public TrainingAPI() {
    return TrainingJobApiFactory(this.apiConfig, this.basePath, this.axiosInstance);
  }

  public executeAll(requests: any) {
    return axios.all(requests);
    // logger.log(axios.all(requests))
  }

  public MasterDataAPI() {
    return TenantApiFactory(this.apiConfig, this.basePath, this.axiosInstance);
  }

  public SessionAPI() {
    return SessionApiFactory(this.apiConfig, this.basePath, this.axiosInstance);
  }

  public WebAPI() {
    return WebApiFactory(this.apiConfig, this.basePath, this.axiosInstance);
  }

  public MobileAPI() {
    return MobileApiFactory(this.apiConfig, this.basePath, this.axiosInstance);
  }

};

export const APIInstance = new CoreAPIClient();