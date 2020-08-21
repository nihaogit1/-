<<<<<<< HEAD
import { observable, action } from 'mobx';
import {getDealerList,getexamType,getQuestionsType,getNewexam,getdelQuestionsType} from '../../services/index'
import {exam1,exam2,exam3} from "../../utils/interface"
class Examdata{
 @observable
 examlist: exam1[] = []
 // 创建
 @action
 getexamdataList = async ( props:any,subject_id: string,exam_id: string,title: string, start_time:number, end_time:number,number?:number)=>{
   let resule = await getNewexam(subject_id, exam_id, title, start_time, end_time);   
     console.log(resule);
     
    if(resule.data.code === 1){
        this.examlist = resule.data;
        window.sessionStorage.setItem('examdata',JSON.stringify(this.examlist))  
        props.history.push({
            pathname:"/home/exam/Edit"
        }) 
    }
   
 }

 @observable
 // 获取所有的课程
 subjectType: exam3[]=[]
 @action
 async getsubjectType(){
  let resule = await getDealerList();
  if(resule.data){
      this.subjectType = resule.data.data;
      window.sessionStorage.setItem('subject',JSON.stringify(this.subjectType))  
  }
 }

// 获取所有的考试类型
@observable

examTypeList: exam2[]=[]

 getgetexamTypeList=()=>{
  getexamType().then(res=>{
    if(res.data.code === 1){
       this.examTypeList = res.data.data; 
       window.sessionStorage.setItem('examType',JSON.stringify(this.examTypeList))        
    }
})
}
// 获取所有的试题类型
@observable

QuestionsTypeList = []
 @action
 async getQuestionsTypeList(){
  let resule = await getQuestionsType();
  if(resule.data){
      this.QuestionsTypeList = resule.data.data;
      window.sessionStorage.setItem('Questions',JSON.stringify(this.QuestionsTypeList))  
  }
 }

 // 删除指定数据
@observable

delQuestionsTypeList = []
 @action
 async getdelQuestionsTypelist(){
  let resule = await getdelQuestionsType();
  console.log(resule)
//   if(resule.data){
//       this.delQuestionsTypeList = resule.data.data
//   }
 }
}




export default {
    Examdata: new Examdata()
=======
import { observable, action } from 'mobx';
import {getDealerList,getexamType,getQuestionsType,getNewexam,getdelQuestionsType} from '../../services/index'
import {exam1,exam2,exam3} from "../../utils/interface"
class Examdata{
 @observable
 examlist: exam1[] = []
 // 创建
 @action
 getexamdataList = async ( props:any,subject_id: string,exam_id: string,title: string, start_time:number, end_time:number,number?:number)=>{
   let resule = await getNewexam(subject_id, exam_id, title, start_time, end_time);   
     console.log(resule);
     
    if(resule.data.code === 1){
        this.examlist = resule.data;
        window.sessionStorage.setItem('examdata',JSON.stringify(this.examlist))  
        props.history.push({
            pathname:"/home/exam/Edit"
        }) 
    }
   
 }

 @observable
 // 获取所有的课程
 subjectType: exam3[]=[]
 @action
 async getsubjectType(){
  let resule = await getDealerList();
  if(resule.data){
      this.subjectType = resule.data.data;
      window.sessionStorage.setItem('subject',JSON.stringify(this.subjectType))  
  }
 }

// 获取所有的考试类型
@observable

examTypeList: exam2[]=[]

 getgetexamTypeList=()=>{
  getexamType().then(res=>{
    if(res.data.code === 1){
       this.examTypeList = res.data.data; 
       window.sessionStorage.setItem('examType',JSON.stringify(this.examTypeList))        
    }
})
}
// 获取所有的试题类型
@observable

QuestionsTypeList = []
 @action
 async getQuestionsTypeList(){
  let resule = await getQuestionsType();
  if(resule.data){
      this.QuestionsTypeList = resule.data.data;
      window.sessionStorage.setItem('Questions',JSON.stringify(this.QuestionsTypeList))  
  }
 }

 // 删除指定数据
@observable

delQuestionsTypeList = []
 @action
 async getdelQuestionsTypelist(){
  let resule = await getdelQuestionsType();
  console.log(resule)
//   if(resule.data){
//       this.delQuestionsTypeList = resule.data.data
//   }
 }
}




export default {
    Examdata: new Examdata()
>>>>>>> 77107653a473225fd6a03345c1a98c335d39c710
}