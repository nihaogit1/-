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
// 更新用户信息
export interface IUpdateUser{
    user_id: string,
    user_name?: string,
    user_pwd?: string,
    identity_id?: string,
    avatar?: string
}
// 添加试题
export interface IAddQuestion {
    questions_type_id: string,
    questions_stem: string,
    subject_id: string,
    exam_id: string,
    user_id: string,
    questions_answer: string,
    title: string
}
// 试题类型
export interface IAddQuestionType {//试题类型
    questions_type_id: string,
    questions_type_text: string,
    questions_type_sort: number
}
// 按条件获取试题
export interface IGetQuestion {
    questions_type_id?: string,
    subject_id?: string,
    exam_id?: string,
    questions_id?: string
}
//试卷列表
export interface IGetExam {
    exam_exam_id?:string,
    subject_id?:string,
    title?:string,
    number?:number,
    start_time?:number,
    end_time?:number,
    page?:number,
    pageSize?:number
}
//创建试卷
export interface ISetExam {
    subject_id:string,
    exam_id:string,
    title:string,
    number?:number,
    start_time:number,
    end_time:number
}

//添加用户信息
export interface IAdduser {
    user_name:string,
    user_pwd:string,
    identity_id?:string
}
//更新用户信息
export interface IChangeUser {
    user_name?:string,
    user_pwd?:string,
    identity_id?:string,
    user_id:string,
    avatar?:string
}

// -----teacher页面

//添加身份
export interface IAddIdentity {
    identity_text:string
}
//添加api接口权限
export interface IAddApi {
    api_authority_text:string,
    api_authority_url:string,
    api_authority_method:string
}
//添加视图权限
export interface IView {
    view_authority_text:string,
    view_id:string
}
//给身份设定api接口权限
export interface IsetIdentityApi{
    identity_id:string,
    api_authority_id:string
}
//给身份设定视图权限
export interface IsetIdentityView{
    identity_id:string,
    view_authority_id:string
}