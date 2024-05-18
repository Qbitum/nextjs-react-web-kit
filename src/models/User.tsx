// export interface User {
//   id: number;
//   name: string;
//   roles: Role[];
//   permissions: Permission[];
// }

export enum Permission {
  LOGIN = "LOGIN",
  SHOW_DASHBOARD = "SHOW_DASHBOARD",
  READ = "READ",
  SHOW_TRAINING = "SHOW_TRAINING",
  SHOW_TRAINING_AGE_LIMIT = "SHOW_TRAINING_AGE_LIMIT",
  SHOW_ECOMMERCE = "SHOW_ECOMMERCE",
  CUSTOMER_MANAGEMENT = "CUSTOMER_MANAGEMENT",
  ADMIN_USER_MANAGEMENT = "ADMIN_USER_MANAGEMENT",
  TRANSACTION_LIMIT_MANAGEMENT = "TRANSACTION_LIMIT_MANAGEMENT",
  ANALYTICS_AND_REPORTING = "ANALYTICS_AND_REPORTING",
  MERCHANT_USER_MANAGEMENT = "MERCHANT_USER_MANAGEMENT",
  REPORTS = "REPORTS",
  DAILY_SCHEDULES = "DAILY_SCHEDULES",
  SERVICE_MANAGEMENT = "SERVICE_MANAGEMENT",
  IB_SYSTEM_MANAGEMENT = "IB_SYSTEM_MANAGEMENT",
  PROMOTIONS_AND_MARKETING = "PROMOTIONS_AND_MARKETING",
  APPROVAL_MANAGEMENT = "APPROVAL_MANAGEMENT"
}

export enum Role {
  AUDIT = "AUDIT",
  BRN_MGR_BNK_ADM = "BRN_MGR_BNK_ADM",
}

export interface User {
  id: string,
  roles: [""],
  permissions: []
  age: number
}

// export function findUserById(id: string | number) {
//   return users.find((user) => Number(id) === user.id) as User;
// }
