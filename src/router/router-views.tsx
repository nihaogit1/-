<<<<<<< HEAD
import React from 'react';
import { IRouterItem } from '../utils/interface';
import { Switch, Route, Redirect } from 'react-router-dom'
import { useObserver } from 'mobx-react-lite'
export interface Iprops {
    routes: IRouterItem[]
}
export default function routerViews(props: Iprops) {
    const route = props.routes.filter(item => item.component);
    const redirect = props.routes.filter(item=>item.to);
    return (
        <Switch>
                {/* {
                    props.routes.map((item, index) => {
                        // 配置重定向
                        if (item.to){
                            if (item.path === '*'){
                                return <Redirect key={item.path} from={item.path} to={item.to}></Redirect>
                            }else{
                                return <Redirect key={item.path} from={item.path} to={item.to}  exact></Redirect>
                            }
                        } 
                    })
                } */}
                 {
                    route.map((item,index)=>{
                        return <Route key={index} path={item.path} render={(props)=>{
                            return <item.component routes={item.children} {...props} ></item.component>
                        }}>

                        </Route>
                    })
                }
                {
                    redirect.map((item,index) => {
                        return <Redirect key= {index} from ={item.path} to= {item.to as string} >

                        </Redirect>
                         
                    })
                }
               
        </Switch>
    )
}
=======
import React from 'react';
import { Iroute } from '../utils/interface';
import { Switch, Route, Redirect } from 'react-router-dom'
export interface Iprops {
    routes: Iroute[]
}
export default function routerViews(props: Iprops) {
    
    const route = props.routes.filter(item => item.component);
    const redirect = props.routes.filter(item=>item.to);
    return (
        <Switch>
                {
                    route.map((item,index)=>{
                        return <Route key={index} path={item.path} render={(props)=>{
                            return <item.component routes={item.children} {...props} ></item.component>
                        }}>

                        </Route>
                    })
                }
                {
                    redirect.map((item,index) => {
                        return <Redirect key= {index} from ={item.path} to= {item.to as string} >

                        </Redirect>
                         
                    })
                }
        </Switch>
    )
}
>>>>>>> 77107653a473225fd6a03345c1a98c335d39c710
