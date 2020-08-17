export interface Iroute {
    path: string,
    component?: any,
    children?: Iroute[],
    to?: string
}

export interface IuserInfo {
    signTime: number,
    user_id: string,
    user_name: string,
    identity_id: string,
    identity_text: string,
    iat: number,
    avatar: string
}
export interface IAddQuestion {
    questions_type_id: string,
    questions_stem: string,
    subject_id: string,
    exam_id: string,
    user_id: string,
    questions_answer: string,
    title: string
}

export interface IExamType {
    exam_id: string,
    exam_name: string
}


// 试题类型
export interface IQuestionType {
    questions_type_id: string,
    questions_type_text: string,
    questions_type_sort: number
}

//添加试题类型
export interface IAddQuestionType{
    text:string,
    sort:string
}
// 所有课程
export interface ISubject {
    subject_id: string,
    subject_text: string
}
