// 'use client'
import { useContext, useEffect, useState } from "react";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { useRouter } from "next/router";
import Dashboard from "./dashboard";
import Public from "./auth"



function Protected() {
  const auth = useContext<IAuthContext>(AuthContext);
  const router = useRouter();

  if (auth.token) {
    router.push('./dashboard')
  }
  else {
    return (<Public />)
  }

}

export default Protected;