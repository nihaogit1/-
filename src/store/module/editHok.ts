import { action,observable } from 'mobx';
import {exam4} from '../../utils/interface'
import {getquestions,getg2dts} from "../../services/index"

class Eidt{
@observable
 examdata: exam4[] = []
 examTypedata = JSON.parse((window.sessionStorage.getItem('examType') as string))  //获取考试类型
 subjectdata = JSON.parse((window.sessionStorage.getItem('subject') as string)) // 获取课程
 @action
 async getquestionsList(){
   let result = await getquestions();
   if(result.data){
     this.examdata = result.data.exam;
   }
 }
 @observable
exam_id = ""
subject_id = ""
@action
handleChangeItem = (item: any) => {

  this.exam_id=item;
}
@action
handleChangeItem1= (item: any) => {
  this.subject_id=item;
}
 // 获取讲师端试卷详情
 @observable
 getg2dtsdata=[]
 @action
 async getgetg2dtsAction(props: any){
   console.log(this.exam_id,this.subject_id)
   let result = await getg2dts(this.exam_id,this.subject_id);
   console.log(result,props)
   if(result.data){
     this.getg2dtsdata = result.data.data;
      props.history.push({
        pathname:"/home/exam/Examdel"
      })
   }
 }
}




export default {
    eidt: new Eidt()
}