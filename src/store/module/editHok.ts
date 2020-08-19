import { action,observable } from 'mobx';
import {exam4} from '../../utils/interface'
import {getquestions} from "../../services/index"

class Eidt{
@observable
 examdata: exam4[] = []
 examTypedata = JSON.parse((window.sessionStorage.getItem('examType') as string))  //获取考试类型
 subjectdata = JSON.parse((window.sessionStorage.getItem('subject') as string)) // 获取课程
 @action
 async getquestionsList(){
   let result = await getquestions();
   console.log(result.data)
   if(result.data){
     this.examdata = result.data.exam;
   }
 }
}


export default {
    eidt: new Eidt()
}