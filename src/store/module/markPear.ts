import { action, observable  } from 'mobx'
import { getgrade, getGrade, addRoom, getRoom, removeRoom ,addGrade,roomDelete} from '../../services/index'
class MarkPear {
    @observable
    markList: any = []
    timetable:any = JSON.parse((window.sessionStorage.getItem('subject') as any)) 
    @action 
    async getgradeAction () {
        let result = await getgrade()
        if(result.data){
          this.markList = result.data.data;
        }
    }

    @observable
    //* 获取已经分配教室的班级的接口
    Marklist: any = []
    Roomlist: any = []

    //*** */ 阅卷管理
    // 获取已经分配教室的班级的接口
    @action
    async getMark() {
        let result = await getGrade()
        this.Marklist = result.data.data
        console.log('result...', result.data.data)
    }

    //*** */ 班级管理
    @action
    async addGrade(data: any) {
        let res: any = await addGrade(data)
        return res
    }
    // 添加教室接口
    @action
    async addRoom(data: any) {
        
        let res: any = await addRoom(data)
        return res
    }

    // 获取添加的教室-渲染
    @action
    async getRoom() {
        let result: any = await getRoom()
        if (result.data.code === 1) {
            this.Roomlist = result.data.data
        }
    }

    // 删除教室
    @action
    async removeRoom(data: any) {
        let res: any = await removeRoom(data)
        return res
    }
    // 删除班级
    @action
    async roomDelete(props: any,data: any) {
      
        let res: any = await roomDelete(data) 
        if(res.code === 1){
            this.getgradeAction()
        }
    }
}

export default MarkPear



