import { action, observable } from 'mobx';
import {getExamType, getQuestionsType, getSubjectType, getQuestionList,getQuestion} from  '../../services/index'
import { IQuestionType,ISubject,IExamType, IGetQuestion } from '../../utils/interface';

class Exam{
    @observable
    examTypes: IExamType[] = []
    @observable
    questionTypes: IQuestionType[] = [];
    @observable
    subjectTypes: ISubject[] = [];
    @observable
    questionList: IGetQuestion[] = [];


    @action 
    // 获取考试类型
    async  getExamAction(){
    let result: any =await getExamType(); 
    
    if(result.data) {
        this.examTypes = result.data.data 
    }
   }
   @action
    //获取所有的试题类型
    async getQuestionsAction(){
        
        let result:any = await getQuestionsType();
        
        if (result.data){
            this.questionTypes = result.data.data;
        }   
        
    }
    @action
    // 获取课程
    async getSubjectAction() {
        let result: any = await getSubjectType();  
        if(result.data) {
            this.subjectTypes = result.data.data         
        }
        
    }
    @action
   //获取试题接口
   async getQuetsionAction(params: IGetQuestion){
    let result: any = await getQuestion(params);
    if (result.data){
        this.questionList = result.data.data;
    }
    return
    }
@action 
async getQuestionListAction(){
    
    let result:any = await getQuestionList();
    if (result.data){
        this.questionList = result.data.data;
    }
    return
}
}
export default Exam
