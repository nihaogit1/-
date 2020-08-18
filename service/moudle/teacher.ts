import axios from "../../utils/requre";
import {
  IAdduser,
  IChangeUser,
  IAddIdentity,
  IAddApi,
  IView,
  IsetIdentityApi,
  IsetIdentityView,
} from "../../utils/interface";

// 获取用户---视图权限数据
export let getViewAuthority = () => {
  return axios.get("/user/view_authority");
};

// 展示用户数据
export let getUser = () => {
  return axios.get("/user/user");
};

// 展示身份数据
export let getIdentity = () => {
  return axios.get("/user/identity");
};

// 展示api接口权限数据
export let getApiAuthority = () => {
  return axios.get("/user/api_authority");
};

// 展示身份和视图权限信息
export let getIdentityText = () => {
  return axios.get("/user/identity_api_authority_relation");
};

// 展示身份和api权限信息
export let getIdentityAuthority = () => {
  return axios.get("/user/identity_api_authority_relation");
};

// 添加用户
export let addUser = (params: IAdduser) => {
  return axios.post("/user", params);
};

// 更新用户信息
export let changeUser = (params: IChangeUser) => {
  return axios.put("/user/user", params);
};

// 添加身份
export let addIdentity = (params: IAddIdentity) => {
  return axios.get("/user/identity/edit", { params });
};

// 添加api接口权限
export let addApi = (params: IAddApi) => {
  return axios.get("/user/authorityApi/edit", { params });
};

// 添加视图权限
export let addView = (params: IView) => {
  return axios.get("/user/authorityView/edit", { params });
};

//给身份设定api接口权限
export let setIdentityApi = (params: IsetIdentityApi) => {
  return axios.post("/user/setIdentityApi", params);
};

//给身份设定视图权限
export let setIdentityView = (params: IsetIdentityView) => {
  return axios.post("/user/setIdentityView", params);
};
