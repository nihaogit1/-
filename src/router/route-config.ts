
import Login from '../views/login/Login'; // 登陆接口
import Home from '../views/home/home';  //  主页接口

import menus from './menu' // 二级路由


import { IMenuItem, IRouterItem } from '../utils/interface'; // 数据规范

function getRoute(menu: IMenuItem[]) {
    let routes: IRouterItem[] = [];
    menu.forEach(item=>{
        routes = routes.concat(item.children);
    })
    routes.push({path: "/home", to: "/home/testQuestions/TQ_add"})
    return routes;
}

const routeConfig = {
    routes : [
        {
            path:'/user/login',
            component:Login
        },
        {
            path:'/home',
            component:Home,
            children:getRoute(menus)
        },
                //  重定向
        {
            path:'*',
            to: '/user/login'
        }
    ]
    
}


export default routeConfig;