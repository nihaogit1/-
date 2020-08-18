import axios from "../../utils/requre";
// 定义类型
import {
  IAddQuestion,
  IAddQuestionType,
  IGetQuestion,
  IGetExam,
  ISetExam
} from "../../utils/interface";

// 获取所有的试题类型
export let getQuestionsType = () => {
  return axios.get("/exam/getQuestionsType");
};

//获取所有的课程
export let getSubjectType = () => {
  return axios.get("/exam/subject");
};

//获取所有的考试类型
export let getExamType = () => {
  return axios.get("/exam/examType");
};

// 添加试题接口
export let addQuestion = (params: IAddQuestion) => {
  return axios.post("/exam/questions", params);
};

//添加试题类型
export let addQuestionsType = (params: IAddQuestionType) => {
  return axios.get("/exam/insertQuestionsType", { params });
};

//按条件获取试题
export let getQuestion = (params: IGetQuestion) => {
  return axios.get("/exam/questions/condition", { params });
};

//获取试题接口
export let getQuestionlist = () => {
  return axios.get("/exam/questions/new");
};

// 获取所有学生信息
export let getStudentInfo = () => {
  return axios.get("/student/info");
};

// 获取试卷列表接口
export let getExamList = (params: IGetExam) => {
    return axios.get('/exam/exam',{params})
};


//创建试卷接口
export let setExam = (params:ISetExam) => {
    return axios.post('/exam/exam',params)
}