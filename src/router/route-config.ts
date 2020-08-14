import Login from '../views/login/Login'; // 登陆接口
import Home from '../views/home/home';  //  主页接口

import Test from '../views/home/testQuestions/TestQuestions'; //  试题管理
import User from '../views/home/user/User'; // 用户管理
import Exam from '../views/home/exam/Exam'; // 考试管理
import ClassG from '../views/home/classAndGrade/ClassGrade'; // 班级管理
import Roll from '../views/home/roll/Roll'; // 阅卷管理 

import { Iroute } from '../utils/interface'; // 数据规范
const routes : Iroute[] = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/test',
                component:Test
            },
            {
                path:'/home/user',
                component:User
            },
            {
                path:'/home/exam',
                component:Exam
            },
            {
                path:'/home/classg',
                component:ClassG
            },
            {
                path:'/home/roll',
                component:Roll
            },
            //  重定向
            {
                path:'/home',
                to: '/home/test'
            }
        ]
    },
            //  重定向
    {
        path:'/',
        to:'/home'
    }
]

export default routes;