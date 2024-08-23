import axios from "axios";

// 用户角色身份
export type UserRoleType = "user" | "admin";

// 返回
export interface GetUserRoleRes {
  userType: UserRoleType;
}

// 获取用户角色身份
export const getUserRole = async () => {
  return axios.get<GetUserRoleRes>("https://mysite.com/api/role");
};

// src/apis/user.ts
// 获取用户列表
export interface FetchUserRes {
  id: string;
  name: string;
}

export const fetchUser = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // return Promise.resolve({
  //   data: {
  //     name: "张三",
  //     id: "123456",
  //     age: 20,
  //   },
  // });
  return axios.get<FetchUserRes>("https://mysite.com/api/users");
};
