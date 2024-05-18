import "@/styles/globals.css";
import { Suspense, useContext, useRef, useState } from "react";

import type { AppProps } from "next/app";
import { QApp } from "../../components/ui/app/index";
import AsideRoutes from "@/layout/AsideRoutes";
import Wrapper from "@/layout/Wrapper";
import { AuthContext, AuthProvider, IAuthContext } from "react-oauth2-code-pkce";
import {
  TAuthConfig
} from "react-oauth2-code-pkce";
import { ToastContainer } from "react-toastify";
import { getAuthConfig } from "@/helpers/helpers";
import { useEffectOnce } from "react-use";
import { AuthAPIContextProvider } from "@/context/authapi.context";
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "QComponents/header";
import LocalContext from "@/LocalContext";
import i18n from "@/i18n";
import ProtectedRoutes from "@/middleware/Middleware";

function Loading() {
  return (
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
  const [locale, setLocale] = useState(i18n.language)



  useEffectOnce(() => {
    setTimeout(() => {
      setAuthConfig(getAuthConfig(process.env.NODE_ENV));
      setShowAuth(true);
    }, 1000);

    if (isRun.current) return;
    isRun.current = true;
  });

  return (
    <>
      <ToastContainer hideProgressBar={true} position="top-center" theme="colored" />
      {showAuth && (
        <AuthProvider authConfig={authConfig!}>
          <LocalContext.Provider value={{ locale }}>
            <AuthAPIContextProvider>
              <QApp id="root">
                <ProtectedRoutes>
                  <AsideRoutes />
                  <Suspense fallback={<Loading />}>
                    <Wrapper>
                      <Header></Header>
                      <Component {...pageProps} />
                    </Wrapper>
                  </Suspense>
                </ProtectedRoutes>
              </QApp>
            </AuthAPIContextProvider>
          </LocalContext.Provider>
        </AuthProvider>
      )}
    </>
  );
}

