import { action, observable } from 'mobx';
// import { IuserInfo } from '../../utils/interface';
import require from '../../utils/requre';
class Grades{
    @observable
    userInfo: any={}

    @action 
    async useInfo(){
     await require.get('/user/userInfo').then(result=>{
        this.userInfo = result.data.data;
       })

    }
    

}
export default Grades
