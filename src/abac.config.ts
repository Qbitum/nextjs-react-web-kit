import { Permission, Role } from "./models/User";



// export function useAuth(): IAuthContext | null {
//   return useContext<IAuthContext>(AuthContext);
// }

// const auth = useContext<IAuthContext>(AuthContext);
// console.log(" token : ", auth?.tokenData?.permissions);

export const rules = {
  [Role.AUDIT]: {
    [Permission.SHOW_DASHBOARD]: true,
    [Permission.SHOW_ECOMMERCE]: false,
    [Permission.LOGIN]: true,
    // [Permission.SHOW_ALL_ICON_AUDIT]: false,
    // [Permission.SHOW_ALL_ICON_BRN_MGR_BNK_ADM]: true,
    // [Permission.SHOW_TRAINING_AGE_LIMIT]: (userAge: number) => userAge > 20,
    // [Permission.SHOW_TRAINING]: true,
  },

  [Role.BRN_MGR_BNK_ADM]: {
    [Permission.SHOW_DASHBOARD]: false,
    [Permission.SHOW_ECOMMERCE]: true,
    [Permission.LOGIN]: true,
    // [Permission.SHOW_ALL_ICON_AUDIT]: true,
    // [Permission.SHOW_ALL_ICON_BRN_MGR_BNK_ADM]: false
  }

};
