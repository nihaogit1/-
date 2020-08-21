<<<<<<< HEAD
import HttpAxios from '../../utils/requre'
import {IAddQuestionType,IGetQuestion,IGetExam} from '../../utils/interface'
// 获取所有的试题类型
export let getQuestionsType = () =>{
    return HttpAxios.get('/exam/getQuestionsType')
}

//获取所有的考试类型
export let getExamType = () => {
    return HttpAxios.get('/exam/examType')
}
//添加试题类型
export let addQuestionsType = (params:IAddQuestionType) =>{
    return HttpAxios.get('/exam/insertQuestionsType',{params})
}

// 获取课程
export let getSubjectType = () => {
    return HttpAxios.get('/exam/subject')
}

//按条件获取试题
export let getQuestion = (params:IGetQuestion) => {
    return HttpAxios.get('/exam/questions/condition',{params})
}

//获取试题接口
export let getQuestionList = () => {
    return HttpAxios.get('/exam/questions/new');
}
//获取试卷列表接口
export let getExamList = (params:IGetExam) => {
    return HttpAxios.get('/exam/exam',{params})
}


// 展示用户数据
export let getConsumerList = ()=>{
    return HttpAxios.get('/user/user');
}

// 展示身份数据
export let getIdentifyList = ()=>{
    return HttpAxios.get('/user/identity');
}

// 展示api接口权限数据
export let getApiAuthority = ()=>{
    return HttpAxios.get('/user/api_authority');
}

// 展示视图权限数据
export let getViewAuthority = ()=>{
    return HttpAxios.get('/user/view_authority');
}

// 展示身份和api权限关系
export let getIdentityApiAuthorityRelation = ()=>{
    return HttpAxios.get('/user/identity_api_authority_relation');
}

// 展示身份和视图权限关系
export let getIdentityViewAuthorityRelation = ()=>{
    return HttpAxios.get('/user/identity_view_authority_relation');
}

=======
import HttpAxios from '../../utils/requre'
import {IAddQuestionType,IGetQuestion,IGetExam} from '../../utils/interface'
// 获取所有的试题类型
export let getQuestionsType = () =>{
    return HttpAxios.get('/exam/getQuestionsType')
}

//获取所有的考试类型
export let getExamType = () => {
    return HttpAxios.get('/exam/examType')
}
//添加试题类型
export let addQuestionsType = (params:IAddQuestionType) =>{
    return HttpAxios.get('/exam/insertQuestionsType',{params})
}

// 获取课程
export let getSubjectType = () => {
    return HttpAxios.get('/exam/subject')
}

//按条件获取试题
export let getQuestion = (params:IGetQuestion) => {
    return HttpAxios.get('/exam/questions/condition',{params})
}

//获取试题接口
export let getQuestionList = () => {
    return HttpAxios.get('/exam/questions/new');
}
//获取试卷列表接口
export let getExamList = (params:IGetExam) => {
    return HttpAxios.get('/exam/exam',{params})
}


// 展示用户数据
export let getConsumerList = ()=>{
    return HttpAxios.get('/user/user');
}

// 展示身份数据
export let getIdentifyList = ()=>{
    return HttpAxios.get('/user/identity');
}

// 展示api接口权限数据
export let getApiAuthority = ()=>{
    return HttpAxios.get('/user/api_authority');
}

// 展示视图权限数据
export let getViewAuthority = ()=>{
    return HttpAxios.get('/user/view_authority');
}

// 展示身份和api权限关系
export let getIdentityApiAuthorityRelation = ()=>{
    return HttpAxios.get('/user/identity_api_authority_relation');
}

// 展示身份和视图权限关系
export let getIdentityViewAuthorityRelation = ()=>{
    return HttpAxios.get('/user/identity_view_authority_relation');
}

>>>>>>> 77107653a473225fd6a03345c1a98c335d39c710
