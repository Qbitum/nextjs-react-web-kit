// 'use client'
import { useContext, useEffect, useState } from "react";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { useRouter } from "next/router";
import Dashboard from "./dashboard";
import Public from "./auth"
import { Button } from "@qbitum/react-flat-ui";



function Protected() {
  const auth = useContext<IAuthContext>(AuthContext);
  const router = useRouter();

  // console.log("Token ", auth.token)
  // console.log("Acess token : ", auth.token);
  // console.log("Id token : ",auth.idToken);
  // console.log("This is index file");

  if (auth.token) {
    router.push('./dashboard')
    // return <p>index page</p>
  }
  else {
    return (<Public />)
  }

  // return (<Public/>)

  // return <div></div>;


}

export default Protected;