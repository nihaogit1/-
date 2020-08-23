import {
    AppstoreOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    MailOutlined,
} from '@ant-design/icons';
import TQ_add from '../views/home/testQuestions/TQ_add';
import TQ_classify from '../views/home/testQuestions/TQ_classify';
import TQ_look from '../views/home/testQuestions/TQ_look';
import TQ_edit from '../views/home/testQuestions/TQ_edit';

// 用户管理
import User_add from '../views/home/user/User_add' // 添加用户
import User_shows from '../views/home/user/User_show' // 用户管理

// 考试管理
import Exam_add from '../views/home/exam/Exam_add'; // 添加考试
import Exam_list from '../views/home/exam/Exam_list'; // 试卷列表
import Edit from '../views/home/exam/Edit'// 创建试题
import Examdel from '../views/home/exam/Examdel'// 详情


// 班级管理
import Class_Grade from '../views/home/classAndGrade/Class_Grade'; // 班级管理
import Room_Grade from '../views/home/classAndGrade/Room_Grade'; // 教室管理
import Student_Grade from '../views/home/classAndGrade/Student_Grade'; // 学生管理

// 阅卷管理 
import Roll from '../views/home/roll/Roll'; // 待批班级
import Rolldetail from '../views/home/roll/rolldetail/Rolldetail';//  待批班级详情
import { IMenuItem } from '../utils/interface';

const menus = [{
    meta: { icon: MenuFoldOutlined, title: '试题管理' },
    children: [{
        path:'/home/testQuestions/TQ_add',
        component: TQ_add,
        meta: { title: '添加试题' } 
    },
    {
        path:'/home/testQuestions/TQ_classify',
        component: TQ_classify,
        meta: { title: '试题分类' } 
    },
    {
        path:'/home/testQuestions/TQ_look',
        component: TQ_look,
        meta: { title: '查看试题' }
    },
    {
        path:'/home/testQuestions/TQ_edit',
        component: TQ_edit,
        meta: {title: '查看试题详情'}
    },
  
]
}, {
    meta: { icon: PieChartOutlined, title: '用户管理' },
    children: [{
        path:'/home/user/User_add',
        component:User_add,
        meta: { title: '添加用户' }
    },
    {
        path:'/home/user/User_show',
        component:User_shows,
        meta: { title: '用户展示' }
    }]
}, {
    meta: { icon: AppstoreOutlined, title: '考试管理' },
    children: [{
        path:'/home/exam/Exam_add',
        component:Exam_add,
        meta: { title: '添加考试' }
    },
    {
        path:'/home/exam/Exam_list',
        component:Exam_list,
        meta: { title: '试卷列表' }
    }, {
        path:'/home/exam/Edit',
        component:Edit,
        meta: { title: '试卷详情', show:false }
    },{
        path: '/home/exam/Examdel',
        component:Examdel,
        meta: {title:'详情2'}
    }]
}, {
    meta: { icon: MailOutlined, title: '班级管理' },
    children: [{
        path:'/home/classAndGrade/Class_Grade',
        component:Class_Grade,
        meta: { title: '班级管理' }
    },
    {
        path:'/home/classAndGrade/Room_Grade',
        component:Room_Grade,
        meta: { title: '教室管理' }
    },
    {
        path:'/home/classAndGrade/Student_Grade',
        component:Student_Grade,
        meta: { title: '学生管理' }
    }]
}, {
    meta: { icon: DesktopOutlined, title: "阅卷"},
    children: [ {
        path:'/home/roll/Roll',
        component:Roll,
        meta: { title: '待批试卷' }
    },
    {
        path:'/home/roll/rolldetail/Rolldetail',
        component:Rolldetail,
        meta: {title: '待批详情'}
    }]
}];

export default menus as IMenuItem[]
