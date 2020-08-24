import request from '../../utils/requre';
import { IAddQuestion } from '../../utils/interface'
//  添加试题接口
export let questions = (params: IAddQuestion) => { // 添加
    return request.post('/exam/questions', {...params})
}
//  获取所有的试题类型
export let QuestionsType =() => {
    return request.get('/exam/getQuestionsType')
}
//  获取所有的课程
export let subject = () => {
    return request.get('/exam/subject')
}

//  获取所有的考试类型
export let examType =() => {
    return request.get('/exam/examType')
}

//  获取已经分配教室的班级的接口
export let getgrade = () => {
    return request.get('/manger/grade')
}
// 获取学生试卷列表
export let getstudent = () => {
    return request.get('/exam/student')
}
// 添加试题类型
export let gettQuestionsType = (text: string,sort: string) => {
    return request.get('/exam/insertQuestionsType',{params:{text,sort}})
}