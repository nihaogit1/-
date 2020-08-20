import { action, observable  } from 'mobx'
import { getgrade } from '../../services/index'
class MarkPear {
    @observable
    markList: any = []

    @action 
    async getgradeAction () {
        let result = await getgrade()
        this.markList = result.data.data
        console.log(this.markList)
    }
}

export default MarkPear