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
          <AuthAPIContextProvider>
            <Suspense fallback={<Loading />}>
              <QApp id="root">
                <AsideRoutes />
                <Wrapper>
                  <Header></Header>
                  <Component {...pageProps} />
                </Wrapper>
              </QApp>
            </Suspense>
          </AuthAPIContextProvider>
        </AuthProvider>
      )}
    </>
  );
}

