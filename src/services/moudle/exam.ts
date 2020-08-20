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