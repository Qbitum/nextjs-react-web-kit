// import { useState, useEffect, useContext, ReactNode } from "react";
// import { useRouter } from "next/router";
// import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";

// export { RouteGuard };

// export type RouteGuardProps = {
//   children?: ReactNode;
// };

// function RouteGuard({ children }: RouteGuardProps) {
//   const router = useRouter();
//   const [authorized, setAuthorized] = useState(false);
//   const auth = useContext<IAuthContext>(AuthContext);
//   useEffect(() => {
//     authCheck(router.asPath);

//     const hideContent = () => setAuthorized(false);
//     router.events.on("routeChangeStart", hideContent);

//     router.events.on("routeChangeComplete", authCheck);

//     return () => {
//       router.events.off("routeChangeStart", hideContent);
//       router.events.off("routeChangeComplete", authCheck);
//     };

//   }, []);

//   function authCheck(url: string) {
//     const publicPaths = ["/"];
//     const path = url.split("?")[0];
//     if (!auth.token && !publicPaths.includes(path)) {
//       setAuthorized(false);
//       router.push({
//         pathname: "/",
//         query: { returnUrl: router.asPath },
//       });
//       return <>{children}</>;

//     } 
//     // else {
//     //   setAuthorized(true);
//     // }
//     // return <>{authorized && children}</>;
    
//   }
//   return <>{children}</>;

// }
