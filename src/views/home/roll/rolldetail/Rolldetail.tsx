import React, { useEffect } from 'react'
import usestore from "../../../../context/usecontext"
import { SearchOutlined } from '@ant-design/icons';
import {useObserver} from 'mobx-react-lite'
import { Select, Form, Button, Table } from 'antd';
export default function Rolldetail(props: any) {
    const { mirChen } = usestore()
    useEffect(() => {
        if(!mirChen.studentarr.length){

            mirChen.getstudentAction()
        }
    },[])
    const selectLayout = {
        labelCol: { offset: 0 },
    };
    const columns = [
        {
            title: '班级',
            dataIndex: '',
            key: '',
        },
        {
            title: '姓名',
            dataIndex: 'student_name',
            key: 'student_name',
        },
        {
            title: '阅卷状态',
            dataIndex:'status',
            // dataIndex: `${status == 0 ?'未阅':'已阅'}`,
            key: 'status',
        },
        {
            title: '开始时间',
            dataIndex: 'start_time',
            key: 'start_time',
        },
        {
            title: '结束时间',
            dataIndex: 'end_time',
            key: 'end_time',
        },
        {
            title: '成材率',
            dataIndex: '',
            key: '',
        },
        {
            title: '操作',
            render: (data: any, record:any) => {
                return <span style={{ color: "#00f" }}>批卷</span>
            },
        },
    ]
    return useObserver(()=>
        <div>
            <div className='seach'>
                <Form 
                     style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 200,
                    }} 
                >

                    <Form.Item label="类型" name="exam_id" {...selectLayout} >
                        <Select style={{width:'50%'}} >{
                            // exam.examTypes.map(item=>{
                            <Select.Option key={1} value={1}>{}</Select.Option>
                            // })
                        }
                        </Select>
                    </Form.Item>
                    <Form.Item label="班级" name="questions_type_id" {...selectLayout} >
                        <Select style={{width:'50%'}} >{
                            // exam.questionTypes.map(item=>{
                            <Select.Option key={1} value={1}>{}</Select.Option>
                            // })
                        }
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>查询</Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='colum'>
                <Table dataSource={mirChen.studentarr} columns={columns}  rowKey = {(record)=>record.student_name} />;
            </div>

        </div>
    )
    
}
