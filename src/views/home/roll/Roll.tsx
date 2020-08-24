import React,{ useEffect } from 'react'
import usestore from '../../../context/usecontext'
import { useObserver } from 'mobx-react-lite'
import { Table } from 'antd'

export default function Roll(props: any) {
    let {rolls} = usestore()
    useEffect(() => {
        if(!rolls.markList.length) {
            rolls.getgradeAction()
        }
    }, [])
   
    const checkPaper = (item: any)=>{
        // console.log(item,'item...')
         props.history.push({
               pathname:"/home/roll/rolldetail/Rolldetail",
           })
          
    }
    const columns = [
        {
            title: '班级名',
            dataIndex: 'grade_name',
            key: 'grade_name',
        },
        {
            title: '课程名称',
            dataIndex: 'subject_text',
            key: 'subject_text',
        },
        {
            title: '阅卷状态',
            dataIndex: '',
            key: ''
           
        },
        {
            title: '教室号',
            dataIndex: 'room_text',
            key: 'room_text',
        },
        {
            title: '操作',
            render: (item: any) => {
                return <span style={{ color: "#00f" }} onClick= {()=>checkPaper(item)}>批卷</span>
            },
        },
    ];
    return useObserver(() => <div>

        <Table dataSource={rolls.markList} columns={columns} rowKey="grade_id" />;
    </div>)
}


