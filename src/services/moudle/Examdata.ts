<<<<<<< HEAD
import request from "../../utils/requre";
 // 获取所有的课程
export let getDealerList = () => {
    return request.get('/exam/subject');
}
 // 获取所有的考试类型
export let getexamType = () => {
    return request.get('/exam/examType');
}
// 获取所有的试题类型
export let getQuestionsTypeAction = () => {
    return request.get('/exam/getQuestionsType');
}
// 创建试卷
export let getNewexam = (subject_id: string,exam_id: string,title: string, start_time:number, end_time:number,number:number=4) => {
    return request.post('/exam/exam',{subject_id,exam_id,title, start_time,end_time,number} )
}
// 删除试题
export let getdelQuestionsType = () => {
    return request.delete('/exam/exam/w5tcy-g2dts');
}
// 删除指定得试题
export let delQuestionsType = (id: string) => {
    return request.post('/exam/delQuestionsType',{id});
}

// 获取所有试题
export let getquestions = () => {
    return request.get('/exam/exam');
}

// 获取试卷详情（教师端）
export let getg2dts = (subject_id?:string,exam_id?:string) => {
    console.log(subject_id,exam_id);
    
    return request.get('/exam/questions/condition',{params:{subject_id,exam_id}});
=======
import request from "../../utils/requre";
 // 获取所有的课程
export let getDealerList = () => {
    return request.get('/exam/subject');
}
 // 获取所有的考试类型
export let getexamType = () => {
    return request.get('/exam/examType');
}
// 获取所有的试题类型
export let getQuestionsTypeAction = () => {
    return request.get('/exam/getQuestionsType');
}
// 创建试卷
export let getNewexam = (subject_id: string,exam_id: string,title: string, start_time:number, end_time:number,number:number=4) => {
    return request.post('/exam/exam',{subject_id,exam_id,title, start_time,end_time,number} )
}
// 删除试题
export let getdelQuestionsType = () => {
    return request.delete('/exam/exam/w5tcy-g2dts');
}
// 删除指定得试题
export let delQuestionsType = (id: string) => {
    return request.post('/exam/delQuestionsType',{id});
}

// 获取所有试题
export let getquestions = () => {
    return request.get('/exam/exam');
}

// 获取试卷详情（教师端）
export let getg2dts = (subject_id?:string,exam_id?:string) => {
    console.log(subject_id,exam_id);
    
    return request.get('/exam/questions/condition',{params:{subject_id,exam_id}});
>>>>>>> 77107653a473225fd6a03345c1a98c335d39c710
}