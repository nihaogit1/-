import request from '../.././utils/requre'

//  获取已经分配教室的班级的接口
export let getgrade = () => {
    return request.get('/manger/grade')
}