import { Permission, Role } from "./models/User";



// export function useAuth(): IAuthContext | null {
//   return useContext<IAuthContext>(AuthContext);
// }

// const auth = useContext<IAuthContext>(AuthContext);
// console.log(" token : ", auth?.tokenData?.permissions);

export const rules = {
  [Role.AUDIT]: {
    [Permission.SHOW_DASHBOARD]: true,
    // [Permission.SHOW_PREP]: true,
    [Permission.SHOW_MYJOBS]: true,
    [Permission.LOGIN]: true,
    [Permission.SHOW_ALL_ICON_OPERATOR]: false,
    [Permission.SHOW_ALL_ICON_ADMIN]: true,
    // [Permission.SHOW_TRAINING_AGE_LIMIT]: (userAge: number) => userAge > 20,
    // [Permission.SHOW_TRAINING]: true,
    // [Permission.SHOW_MYJOBS]: false,
  },

  [Role.BRN_MGR_BNK_ADM]: {
    [Permission.SHOW_MYJOBS]: false,
    [Permission.SHOW_DASHBOARD]: false,
    // [Permission.SHOW_PREP]: false,
    [Permission.LOGIN]: true,
    [Permission.SHOW_ALL_ICON_OPERATOR]: true,
    [Permission.SHOW_ALL_ICON_ADMIN]: false
  }

};
