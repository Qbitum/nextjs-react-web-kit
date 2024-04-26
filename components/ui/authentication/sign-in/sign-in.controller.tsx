import { signIn } from "next-auth/react";
import { useState } from "react";

export interface IAction {
  type: string;
  data?: any;
}

export interface ISignInFormModel {
  username: string;
  password: string;
}
const SignInController = (successCb:Function,errorCb:Function) => {
  const initialFormData = { username: "", password: "" };
  // TODO: use formik as the form handler plugin
  const [userInfo, setUserInfo] = useState<ISignInFormModel>(initialFormData);

  const onSuccess = (res:any) =>{
    /* eslint-disable no-console */
    console.log('SignIn onSuccess: implement me',res);
    successCb.call(this,res);
  }

  const onError = () => {
     /* eslint-disable no-console */
     console.log('SignIn onError: implement me');
     errorCb.call(this);
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // stop the normal event behavior
      // TODO: implement actions here
    const res = await signIn("credentials", {
        username: userInfo.username,
        password: userInfo.password,
        redirect: false,
      });
     if(res?.ok) {
      onSuccess(res); 
     }else if(res?.error) {
       onError();
     }
    };

  return {
   userInfo,
   setUserInfo,
   handleSubmit,
   onSuccess,
   onError
  };
};

export default SignInController;
