import { action, observable } from 'mobx';
// import { IuserInfo } from '../../utils/interface'
import require from '../../utils/requre';
class Grades{
    @observable
    userInfo:any = {}

    @action 
    async useInfo(){
     let result = await require.get('/user/userInfo')
     this.userInfo = result.data.data;
    }
    @observable
    questions = {
      questions_type_id:'',
      questions_stem:'',
      subject_id:'',
      exam_id:'',
      user_id:'',
      questions_answer:"",
      title:''

    }

    @action
    async question() {
     let result = await require.post('/exam/questions',{...this.questions})
     console.log(result,'questions...')
    }
   


}
export default Grades
