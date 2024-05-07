import React from 'react';
import { Button } from '@qbitum/react-flat-ui';
import { SignIn } from './sign-in';
/* load the tailwind main file */
import '@qbitum/saastack-react.config.tailwind/globals.tailwind.css';

function onSuccessComposition(res: any) {
  /* eslint-disable no-console */
  console.log('SignIn composition onSuccess: implement me', res);
}

function onErrorComposition() {
  /* eslint-disable no-console */
  console.log('SignIn onError: implement me');
}

export const BasicSignIn = () => {
  return (
    <SignIn lables={false} onSuccess={onSuccessComposition} onError={onErrorComposition} />
  );
}

export const EaseSignIn = () => {
  return (<SignIn lables={false} onSuccess={onSuccessComposition} onError={onErrorComposition}
    fogotPasswordComp={
      <div className="mt-2 text-center">
        <Button className="bg-transparent text-gray-800 font-bold border-0 hover:bg-transparent hover:text-theme-primaryDark underline w-full">Forgotten your login details?</Button>
      </div>
    }

    registerComp={
      <div className="mt-6 text-center">
        <div className="text-gray-500 text-xs font-bold mb-2">Not registered for Online Banking?</div>
        <Button className="uppercase text-theme-primary hover:text-theme-primaryDark hover:bg-gray-100 w-full" outline>Register Now</Button>
      </div>
    }
  />);
}
