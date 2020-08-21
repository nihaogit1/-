import { action, observable  } from 'mobx'
import { getgrade, getGrade, addRoom, getRoom, removeRoom, getStudent, removeStudent} from '../../services/index'
class MarkPear {
    @observable
    markList: any = []

    @action 
    async getgradeAction () {
        let result = await getgrade()
        this.markList = result.data.data
        console.log(this.markList)
    }

    @observable
    //* 获取已经分配教室的班级的接口
    Marklist: any = []
    Roomlist: any = []
    Studentlist: any = []

   //* <-------阅卷管理------->
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


    //* 学生管理页面
    @action//获取数据--渲染
    async getStudent() {
        let res = await getStudent()
        this.Studentlist = res.data.data
    }
    
    @action//删除学生
    async removeStudent(data: any) {
        let res: any = await removeStudent(data)
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



