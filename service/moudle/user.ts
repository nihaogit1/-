import axios from "../../utils/requre";
// 定义类型
import { IUpdateUser } from "../../utils/interface";

// 登录
export let login = (user_name: string, user_pwd: string) => {
  return axios.post("/user/login", { user_name, user_pwd });
};

// 获取用户信息接口
export let userInfo = () => {
  return axios.get("/user/userInfo");
};

// 根据用户id，返回该用户的视图权限
export let newuser = (user_id: string) => {
  return axios.get("/user/new", { params: { user_id } });
};

//更新用户头像
export let updateUserInfo = (params: IUpdateUser) => {
  return axios.put("/user/user/", params);
};
