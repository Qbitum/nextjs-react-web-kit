import { useContext } from "react";
import { Permission, Role, User } from "./models/User";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { logger } from "./helpers/logger";


// export function useAuth(): IAuthContext | null {
//   return useContext<IAuthContext>(AuthContext);
// }

// const auth = useContext<IAuthContext>(AuthContext);
// console.log(" token : ", auth?.tokenData?.permissions);

export const rules = {
  [Role.ADMIN]: {
    [Permission.SHOW_DASHBOARD]: true,
    // [Permission.SHOW_PREP]: true,
    [Permission.LOGIN]: true,
    // [Permission.SHOW_ALL_ICON_OPERATOR]: false,
    // [Permission.SHOW_ALL_ICON_ADMIN]: true,
    // [Permission.SHOW_TRAINING_AGE_LIMIT]: (userAge: number) => userAge > 20,
    // [Permission.SHOW_TRAINING]: true,
    // [Permission.SHOW_MYJOBS]: false,
  },

  // [Role.OPERATOR]: {
  //   [Permission.SHOW_MYJOBS]: true,
  //   [Permission.SHOW_DASHBOARD]: false,
  //   [Permission.SHOW_PREP]: false,
  //   [Permission.LOGIN]: true,
  //   [Permission.SHOW_ALL_ICON_OPERATOR]: true,
  //   [Permission.SHOW_ALL_ICON_ADMIN]: false
  // }

};
