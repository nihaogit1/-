<<<<<<< HEAD
import { action, observable  } from 'mobx'
import { getgrade, getGrade, addRoom, getRoom, removeRoom } from '../../services/index'
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

    //*** */ 阅卷管理
    // 获取已经分配教室的班级的接口
    @action
    async getMark() {
        let result = await getGrade()
        this.Marklist = result.data.data
        console.log('result...', result.data.data)
    }

    //*** */ 班级管理

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
            console.log('6666')
            this.Roomlist = result.data.data
        }
    }

    // 删除教室
    @action
    async removeRoom(data: any) {
        let res: any = await removeRoom(data)
        return res
    }
}

export default MarkPear



=======
import { action, observable  } from 'mobx'
import { getgrade, getGrade, addRoom, getRoom, removeRoom } from '../../services/index'
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

    //*** */ 阅卷管理
    // 获取已经分配教室的班级的接口
    @action
    async getMark() {
        let result = await getGrade()
        this.Marklist = result.data.data
        console.log('result...', result.data.data)
    }

    //*** */ 班级管理

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
            console.log('6666')
            this.Roomlist = result.data.data
        }
    }

    // 删除教室
    @action
    async removeRoom(data: any) {
        let res: any = await removeRoom(data)
        return res
    }
}

export default MarkPear



>>>>>>> 77107653a473225fd6a03345c1a98c335d39c710
