import { useContext, useEffect, useState,useRef } from "react";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { useRouter } from "next/router";



const Public = () => {
  const auth = useContext<IAuthContext>(AuthContext);
  const [publicPage, setPublicPage] = useState(1);
  const router = useRouter();
  const isRun = useRef(false);
  auth.login();
  return <div></div>;
};

export default Public;