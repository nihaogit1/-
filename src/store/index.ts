import Grades from './module/addType'
import Classify from './module/TQ_classify'
import User from './module/user'
import exam from "./module/examHok" // 添加考试的HOOLS
import eidt from './module/editHok'
export default {
    mirChen: new Grades(),
    exam: new Classify(),
    user:new User(),
    Exam: exam.Examdata,
    eidt:eidt.eidt

}

