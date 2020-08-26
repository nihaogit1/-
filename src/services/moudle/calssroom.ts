import request from '../../utils/requre'

//* 获取全部教室接口
export let getRoom = () => {
  return request.get("/manger/room");
};

//* 获取已经分配教室的班级的接口
export let getGrade = () => {
  return request.get("/manger/grade");
};

// 添加班级接口
export let addGrade = (data: any) => {
  return request.post("/manger/grade", data);
};

// 删除班级接口
export let roomDelete = (data: string) => {
  return request.delete("/manger/grade/delete", {data});
};

//* 添加教室接口
export let addRoom = (data: any) => {
  return request.post("/manger/room", data);
};

//* 删除教室接口
export let removeRoom = (data: any) => {
  return request.delete("/manger/room/delete", {data});
};

// 更新班级信息接口
export let upRoom = (data: any) => {
  return request.put("/manger/grade/update", data);
};

// 已经分班学生接口
export let getStudent = () => {
  return request.get("/manger/student");
};

// 没有分班学生接口
export let getNewStudent = () => {
  return request.get("/manger/student/new");
};

//* 删除学生接口
export let removeStudent = (data: any) => {
  return request.delete(`/manger/student/${data}`);
};