import { action, observable } from 'mobx'
import { getgrade,getStudent, getGrade, addRoom, getRoom, removeRoom, addGrade, roomDelete, removeStudent } from '../../services/index'
class MarkPear {
    //* 获取已经分配教室的班级的接口
    @observable
    markList: any = []
    @observable
    Marklist: any = []
    @observable
    Roomlist: any = []
    @observable
    Studentlist: any = [];
    @observable
    timetable: any = JSON.parse((window.sessionStorage.getItem('subject') as any))
    @action
    async getgradeAction() {
        let result = await getgrade()
        if (result.data) {
            this.markList = result.data.data;
        }
    }
    @observable//搜索栏---获取全部教室
    mangerRoom: any[] = []
  
    @observable//搜索栏---获取已经分配教室的班级
    grade: any[] = []
    //*** */ 阅卷管理
    // 获取已经分配教室的班级的接口
    @action
    async getMark() {
        let result = await getGrade()
        this.Marklist = result.data.data
    }
    //* 学生管理页面
    @action //获取数据--渲染
     getStudentlistAction() {
         getStudent().then(res=>{
             if(res.data){

                 this.Studentlist = res.data.data;
             }

        })
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
    async roomDelete(props: any, data: any) {
        // console.log(data,'data...')
        let res: any = await roomDelete(data)
        if (res.data.code === 1) {
            this.getgradeAction()
        }
    }
    //* 学生管理页面
    @action //获取数据--渲染
    async getStudent() {
      let res = await getStudent();
      this.Studentlist = res.data.data;
    }
  

    @action //删除学生
    async removestudent(data: any) {
      let res: any = await removeStudent(data);
      return res;
    }
    // 上面下拉框--以及搜索
  @action
  async getMangerRoom() { //获取全部教室接口
      let res: any = await getRoom()
      if (res.data.code === 1) {
          this.mangerRoom = res.data.data;
      }
  }

  @action
  async getgrade() { //获取已经分配教室的班级
    let res: any = await getGrade();
    if (res.data.code === 1){
        this.grade = res.data.data;
    }
  }
}

export default MarkPear