import React,{ useEffect } from 'react'
import usestore from '../../../context/usecontext'
import { useObserver } from 'mobx-react-lite'
import { Table } from 'antd'
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
        key: '',
    },
    {
        title: '教室号',
        dataIndex: 'room_text',
        key: 'room_text',
    },
    {
        title: '操作',
        render: () => {
            return <span style={{ color: "#00f" }} >批卷</span>
        },
    },
]
export default function Roll() {
    let {rolls} = usestore()
    useEffect(() => {
        rolls.getgradeAction()
    }, [rolls])
    return useObserver(() => <div>

        <Table dataSource={rolls.markList} columns={columns} rowKey="grade_id" />
    </div>)
}

