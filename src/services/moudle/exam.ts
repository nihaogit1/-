import HttpAxios from '../../utils/requre'
import {IAddQuestionType} from '../../utils/interface'
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