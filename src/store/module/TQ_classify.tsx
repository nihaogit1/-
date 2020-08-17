import { action, observable } from 'mobx';
import {getExamType, getQuestionsType, getSubjectType} from  '../../services/index'
import { IQuestionType,ISubject,IExamType } from '../../utils/interface';

class Exam{
    @observable
    examTypes: IExamType[] = []
    @observable
    questionTypes: IQuestionType[] = [];
    @observable
    subjectTypes: ISubject[] = [];
    


    @action 
    // 获取考试类型
     getExamAction=()=>{
    let result: any = getExamType(); 
    
    if(result.code === 1) {
        this.examTypes = result.data  
    }
   }

   @action
    //获取所有的试题类型
    async getQuestionsAction(){
        
        let result:any = await getQuestionsType();
        
        if (result.data.code === 1){
            this.questionTypes = result.data.data;
        }   
    }
    @action
    // 获取课程
    async getSubjectAction() {
        let result: any = getSubjectType();
        console.log(result)
        if(result.code === 1) {
            this.subjectTypes = result.data.data
            
        }
    }
      
    }
export default Exam
