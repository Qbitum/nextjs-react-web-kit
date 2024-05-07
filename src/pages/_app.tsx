import "@/styles/globals.css";
import { Suspense, useContext, useRef, useState } from "react";
import type { AppProps } from "next/app";
import { QApp } from "../../saastack-react/ui/app/index";
import AsideRoutes from "@/layout/AsideRoutes";
import Wrapper from "@/layout/Wrapper";
import { AuthContext, AuthProvider, IAuthContext } from "react-oauth2-code-pkce";
import 'react-toastify/dist/ReactToastify.css';

import {
  TAuthConfig
} from "react-oauth2-code-pkce";
import { ToastContainer } from "react-toastify";
import { getAuthConfig } from "@/helpers/helpers";
import { useEffectOnce } from "react-use";
import { AuthAPIContextProvider } from "@/context/authapi.context";
import LocalContext from "@/LocalContext";
import i18n from '../i18n';

// import { rules } from "@/abac.config";
function Loading(){
  return(
    <>
      Loading...
    </>
  )
}

export default function ImAdminApp({
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
  const [locale, setLocale] = useState(i18n.language)

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  const handleChange = (event : any) => {
      i18n.changeLanguage(event.target.value);

  }


  return (
    <>
      <ToastContainer hideProgressBar={true} position="top-center" theme="colored" />
      {showAuth && (
        <AuthProvider authConfig={authConfig!}>
          <AuthAPIContextProvider>
       
           <LocalContext.Provider value={{locale}}>
            <Suspense fallback={<Loading/>}>
            <QApp id="root">
              <AsideRoutes />
              <Wrapper>
              {/* <div>
              <label>Local Change</label>
              <select value = {locale}  onChange={handleChange}>
                <option value="en">English</option>
                <option value="hn">Hindi</option>
              </select>
              </div> */}
                {/* <HeaderRoutes/> */}
                {/* <AbacProvider rules={rules} user={user} roles={user.roles} permissions={user.permissions}> */}
                <Component {...pageProps} />
                {/* </AbacProvider> */}
              </Wrapper>
            </QApp>
            </Suspense>
           </LocalContext.Provider>
            </AuthAPIContextProvider>
          </AuthProvider>
      )}
    </>
  );
}

