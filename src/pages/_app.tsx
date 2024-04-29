import "@/styles/globals.css";
import { useContext, useRef, useState } from "react";
import type { AppProps } from "next/app";
import { QApp } from "../../saastack-react/ui/app/index";
import AsideRoutes from "@/layout/AsideRoutes";
import Wrapper from "@/layout/Wrapper";
import { AuthContext, AuthProvider, IAuthContext } from "react-oauth2-code-pkce";
import 'react-toastify/dist/ReactToastify.css';
import {appWithTranslation} from 'next-i18next'

import {
  TAuthConfig
} from "react-oauth2-code-pkce";
import { ToastContainer } from "react-toastify";
import { getAuthConfig } from "@/helpers/helpers";
import { useEffectOnce } from "react-use";
import { AuthAPIContextProvider } from "@/context/authapi.context";
// import { rules } from "@/abac.config";


function ImAdminApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [showAuth, setShowAuth] = useState(false);
  const isRun = useRef(false);
  const [authConfig, setAuthConfig] = useState<TAuthConfig>();
  const auth = useContext<IAuthContext>(AuthContext);



  useEffectOnce(() => {
    setTimeout(() => {
      setAuthConfig(getAuthConfig(process.env.NODE_ENV));
      setShowAuth(true);
      // if(!(auth.token)){
      //   return(
      //   <AuthProvider authConfig={authConfig!}>
      //     <Public/>      
      //   </AuthProvider>

      //  );    }      


    }, 1000);

    if (isRun.current) return;
    isRun.current = true;
  });

  // const user = {
  //   id: 1,
  //   roles: [roles.ADMIN],
  //   permissions: []
  // };


  // const rules : any = {
  //   [roles.ADMIN]: {
  //       [auth?.tokenData?.permissions[0]]: true,
  //       // [permissions.DELETE_POST]: true,

  //     }
  //   }


  return (
    <>
      <ToastContainer hideProgressBar={true} position="top-center" theme="colored" />
      {showAuth && (
        <AuthProvider authConfig={authConfig!}>
          <AuthAPIContextProvider>
            <QApp id="root">
              <AsideRoutes />
              <Wrapper>
                {/* <HeaderRoutes/> */}
                {/* <AbacProvider rules={rules} user={user} roles={user.roles} permissions={user.permissions}> */}
                <Component {...pageProps} />
                {/* </AbacProvider> */}
              </Wrapper>
            </QApp>
           </AuthAPIContextProvider>
         </AuthProvider>
      )}
    </>
  );
}
export default appWithTranslation(ImAdminApp);

// const EditPost = () => {
//   const {userHasPermissions} : any = useAbac();

//     if (!userHasPermissions([permissions.SHOW_DASHBOARD], post)) {
//       return <div>No Allowed!!</div>;
//     }

//   return <div>YES</div>
// };