import { action, observable } from 'mobx';
import { getRoom, getIdentityViewAuthorityRelation, getIdentityApiAuthorityRelation, getViewAuthority, getApiAuthority, getExamType, getIdentifyList, getQuestionsType, getSubjectType, getQuestionList, getConsumerList, gettQuestionsType } from '../../services/index'
import { IQuestionType, ISubject, IExamType, IQuestion } from '../../utils/interface';

class Exam {
    [key: string]: any
    @observable
    examTypes: IExamType[] = []
    @observable
    questionTypes: IQuestionType[] = [];
    @observable
    subjectTypes: ISubject[] = [];
    @observable
    questionList: IQuestion[] = [];
    @observable
    consumerList = [];
    @observable
    identifyList = [];
    @observable
    apiAuthorityList = [];
    @observable
    viewAuthorityList = [];
    @observable
    identityApiAuthorityRelation = [];
    @observable
    identityViewAuthorityRelation = [];
    @observable
    allRoomList = []

    @action
    // 获取考试类型
    async getExamAction() {
        let result: any = await getExamType();

        if (result.data) {
            this.examTypes = result.data.data
        }
    }
    @action
    //获取所有的试题类型
    async getQuestionsAction() {

        let result: any = await getQuestionsType();

        if (result.data) {
            this.questionTypes = result.data.data;
        }

    }
    @action
    // 获取课程
    async getSubjectAction() {
        let result: any = await getSubjectType();
        if (result.data) {
            this.subjectTypes = result.data.data
        }

    }
    //获取试题接口
    @action
    async getQuestionListAction() {
        let result: any = await getQuestionList();
        if (result.data) {
            this.questionList = result.data.data;
        }
    }
    // 展示用户数据
    @action
    async getConsumerListAction() {
        let result = await getConsumerList();
        if (result.data) {
            this.consumerList = result.data.data;
        }

    }
    // 展示身份数据
    @action
    async getIdentifyListAction() {
        let result = await getIdentifyList();
        if (result.data) {
            this.identifyList = result.data.data;
        }

    }
    // 展示api接口权限数据
    @action
    async getApiAuthorityAction() {
        let result = await getApiAuthority();
        if (result.data) {
            this.apiAuthorityList = result.data.data;
        }

    }
    // 展示视图权限数据
    @action
    async getViewAuthorityAction() {
        let result = await getViewAuthority();
        if (result.data) {
            this.viewAuthorityList = result.data.data;
        }

    }
    // 展示身份和api权限关系
    @action
    async getIdentityApiAuthorityRelationAction() {
        let result = await getIdentityApiAuthorityRelation();
        if (result.data) {
            this.identityApiAuthorityRelation = result.data.data;
        }

    }
    // 展示身份和视图权限关系
    @action
    async getIdentityViewAuthorityRelationAction() {
        let result = await getIdentityViewAuthorityRelation();
        if (result.data) {
            this.identityViewAuthorityRelation = result.data.data;
        }
    }

    // 获取教室
    //获取教室接口
    @action
    async getRoomListAction() {
        let result: any = await getRoom();

        if (result.data) {
            this.allRoomList = result.data.data
        }
        console.log(this.allRoomList)
        return result
    }
    // 添加试题类型
    @action
    async getinsertQuestionsTypeAction(text: string, sort: string) {
        let result = await gettQuestionsType(text, sort)
        if (result.data.code === 1) {
            this.getQuestionsAction()

        }

    }
}
export default Exam

