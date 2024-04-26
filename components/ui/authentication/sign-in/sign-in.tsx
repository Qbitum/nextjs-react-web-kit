import React, { ReactNode } from "react";
import { Label, TextInput, Button } from "flowbite-react";
import SignInController from "./sign-in.controller";

export type SignInProps = {
  /**
   * a node to be rendered in the special component.
   */
  fogotPasswordComp?: ReactNode;
  registerComp?: ReactNode;
  lables: boolean;
  onSuccess: (res: any) => void;
  onError: () => void;
};

export function SignIn({
  fogotPasswordComp,
  registerComp,
  lables,
  onSuccess,
  onError,
}: SignInProps) {

  const signInController = SignInController(onSuccess, onError);

  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <form onSubmit={(e) => signInController.handleSubmit(e)}>
          <div className=" text-center">
            <div className="mb-4">
              {lables && <Label className="uppercase text-gray-500 text-sm">
                UserName
              </Label>}
              <TextInput
                type="test"
                placeholder="username"
                value={signInController.userInfo.username}
                onChange={({ target }) =>
                  signInController.setUserInfo({
                    ...signInController.userInfo,
                    username: target.value,
                  })
                }
              />
            </div>
            <div className="mb-4">
              {lables && <Label className="uppercase text-gray-500 text-sm">
                Password
              </Label>}
              <TextInput
                type="password"
                placeholder="******"
                value={signInController.userInfo.password}
                onChange={({ target }) =>
                  signInController.setUserInfo({
                    ...signInController.userInfo,
                    password: target.value,
                  })
                }
              />
            </div>
            <Button type="submit" className="uppercase w-full">
              Login
            </Button>
          </div>
        </form>
        {fogotPasswordComp}
        {registerComp}
      </div>
    </div>
  );
}
// should keep the default implementations here, if we are making any property optional
SignIn.defaultProps = {
  fogotPasswordComp: "",
  registerComp: "",
};
