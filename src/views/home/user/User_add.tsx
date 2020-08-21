import React from 'react'
import AddUser from '../../../components/adduser'
import AddId from '../../../components/addid'
import AddApi from '../../../components/addapi'
import AddRoutes from '../../../components/addroutes'
import SetApi from '../../../components/Setjk'
import SetRoutes from '../../../components/Setv'
import style from './Ue.module.scss'
export default function User_add() {
    return (
        <div className={style.UE}>
            <AddUser></AddUser>
            <AddId></AddId>
            <AddApi></AddApi>
            <AddRoutes></AddRoutes>
            <SetApi></SetApi>
            <SetRoutes></SetRoutes>
        </div>
    )
}
