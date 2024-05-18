import { ComponentType, ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext, IAuthContext } from 'react-oauth2-code-pkce';
import { logger } from '@/helpers/logger';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: ComponentType<ProtectedRouteProps> = ({ children }) => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const protectedRoutes = [
    "/dashboard",
    "/ecommerce",
  ];
  const auth = useContext<IAuthContext>(AuthContext);
  logger.log("Middleware auth", auth);

  useEffect(() => {
    async function checkauth() {

      const currentPath = router.pathname;
      logger.log("currentPath", currentPath);

      if (!auth.token && protectedRoutes.includes(currentPath) && !auth.loginInProgress) {
        router.push('/unauthorized');
      } else if (!auth.token && protectedRoutes.includes(currentPath) && auth.loginInProgress) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }
    checkauth();

  }, [auth]);
  logger.log("loginInProgress", auth.loginInProgress);

  if (isLoading) {
    return <></>
  }

  return <>{children}</>;
};

export default ProtectedRoute;