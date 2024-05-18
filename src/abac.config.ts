import { Permission, Role } from "./models/User";



// export function useAuth(): IAuthContext | null {
//   return useContext<IAuthContext>(AuthContext);
// }

// const auth = useContext<IAuthContext>(AuthContext);
// console.log(" token : ", auth?.tokenData?.permissions);

export const rules = {
  [Role.AUDIT]: {
    [Permission.LOGIN]: true,
    [Permission.SHOW_DASHBOARD]: true,
    [Permission.SHOW_ECOMMERCE]: false,
    [Permission.CUSTOMER_MANAGEMENT]: true,
    [Permission.ADMIN_USER_MANAGEMENT]: true,
    [Permission.TRANSACTION_LIMIT_MANAGEMENT]: true,
    [Permission.ANALYTICS_AND_REPORTING]: true,
    [Permission.MERCHANT_USER_MANAGEMENT]: true,
    [Permission.REPORTS]: true,
    [Permission.DAILY_SCHEDULES]: true,
    [Permission.SERVICE_MANAGEMENT]: true,
    [Permission.IB_SYSTEM_MANAGEMENT]: true,
    [Permission.PROMOTIONS_AND_MARKETING]: true,
    [Permission.APPROVAL_MANAGEMENT]: true,

    // [Permission.SHOW_ALL_ICON_AUDIT]: false,
    // [Permission.SHOW_ALL_ICON_BRN_MGR_BNK_ADM]: true,
    // [Permission.SHOW_TRAINING_AGE_LIMIT]: (userAge: number) => userAge > 20,
    // [Permission.SHOW_TRAINING]: true,
  },

  [Role.BRN_MGR_BNK_ADM]: {
    [Permission.LOGIN]: true,
    [Permission.SHOW_DASHBOARD]: false,
    [Permission.SHOW_ECOMMERCE]: true,
    // [Permission.SHOW_ALL_ICON_AUDIT]: true,
    // [Permission.SHOW_ALL_ICON_BRN_MGR_BNK_ADM]: false
  }

};
