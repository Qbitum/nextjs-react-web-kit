// export interface User {
//   id: number;
//   name: string;
//   roles: Role[];
//   permissions: Permission[];
// }

export enum Permission {
  SHOW_DASHBOARD = "SHOW_DASHBOARD",
  SHOW_PREP = "SHOW_PREP",
  SHOW_MYJOBS = "SHOW_MYJOBS",
  LOGIN = "LOGIN",
  READ = "READ",
  SHOW_TRAINING = "SHOW_TRAINING",
  SHOW_TRAINING_AGE_LIMIT = "SHOW_TRAINING_AGE_LIMIT",
  SHOW_ECOMMERCE = "SHOW_ECOMMERCE"
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
