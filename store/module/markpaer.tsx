import { observable, action } from 'mobx';
import { getGrade } from '../../service/index'
class Mark {
    @observable
    Marklist: any = []

    @action
    async getMark() {
        let result = await getGrade()
        return result
        console.log(result.data)
    }



}
export default Mark


