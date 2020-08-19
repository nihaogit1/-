import Grades from './module/addType'
import Classify from './module/TQ_classify'
import exam from "./module/examHok" // 添加考试的HOOLS
import eidt from './module/editHok'
import MarkPear from './module/markPear'
export default {
    mirChen: new Grades(),
    exam: new Classify(),
    user:new User(),
    Exam: exam.Examdata,
    eidt:eidt.eidt,
    rolls: new MarkPear()
}

