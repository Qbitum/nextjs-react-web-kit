import { logger } from "@/helpers/logger";
import { CoreAPIClient } from "@/pages/api/api-client";
import { Configuration } from "@/services";
import { FC, ReactNode, createContext, useContext, useMemo } from "react";
import { AuthContext } from "react-oauth2-code-pkce";

export interface AuthApiContextProps {
  AuthApi: () => CoreAPIClient
}

export const AuthAPIContext = createContext<AuthApiContextProps>(
  {} as AuthApiContextProps
);;

interface AuthAPIContextProviderProps {
  children: ReactNode
}

export const AuthAPIContextProvider: FC<AuthAPIContextProviderProps> = ({ children }) => {
  const authContext = useContext(AuthContext);
  const APIInstance = new CoreAPIClient();

  const apiConfig = new Configuration({ accessToken: 'contextauth' });

  const AuthApi = (): CoreAPIClient => {
    apiConfig.accessToken = authContext.token;
    APIInstance.setAuthConfigs(apiConfig);
    // logger.log(APIInstance);
    return APIInstance;
  };

  const value = useMemo(
    () => ({
      AuthApi
    }),
    [AuthApi],
  );
  return <AuthAPIContext.Provider value={value}>{children}</AuthAPIContext.Provider>;
};

export default AuthAPIContext;