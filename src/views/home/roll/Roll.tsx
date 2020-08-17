import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { Table } from 'antd'
function Roll() {
  
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
    ];

    return useObserver(() => <div>
        <Table  columns={columns} rowKey="grade_id" />;
    </div>)
}
export default Roll