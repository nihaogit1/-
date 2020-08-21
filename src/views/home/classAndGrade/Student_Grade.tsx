import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import student_scss from './classadd.module.scss'
import { Table, Form, Input, Button, Select, message } from 'antd'
import usestore from '../../../context/usecontext'

//  组件文件中引入中文语言包
// 修改分页中的 10/page  改为中文后10条/页
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';



const StudentGrade: React.FC = () => {
    let { rolls } = usestore()

    useEffect(() => {
        rolls.getStudent()
    }, [rolls])
    // console.log(rolls.Studentlist)
    // 删除
    let removeStudent = (student_id: string) => {
        console.log(student_id)
        rolls.removeStudent(student_id).then(res => {
            message.info(res.data.msg)
        })

    }


    const columns = [
        {
            title: '姓名',
            dataIndex: 'student_name',
            key: 'student_name',
        },
        {
            title: '学号',
            dataIndex: 'student_id',
            key: 'student_id',
        },
        {
            title: '班级',
            dataIndex: 'grade_name',
            key: 'grade_name',
        },
        {
            title: '教室',
            dataIndex: 'room_text',
            key: 'room_text',
        },
        {
            title: '密码',
            dataIndex: 'student_pwd',
            key: 'student_pwd',
        },
        {
            title: '操作',
            dataIndex: 'student_id',
            key: 'student_id',
            render: (student_id: string) => {
                return <div style={{ color: 'blue', cursor: 'pointer' }} onClick={() => { removeStudent(student_id) }}>删除</div>
            }
        },
    ]

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return useObserver(() => <ConfigProvider locale={zhCN}> <div className={student_scss.student}>
        <Form
            className={student_scss.form}
            name="basic"
            initialValues={{}}
            onFinish={onFinish}
        >
            <Form.Item
                className={student_scss.formitem}
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input placeholder="请输入学生姓名" />
            </Form.Item>


            <Form.Item className={student_scss.formitem} name="room_id" rules={[{ required: true }]}>
                <Select
                    style={{ width: "150px" }}
                >
                    {/*    {
                        banji.mangerRoom.map(item => {
                            return <Select.Option key={item.room_id} value={item.room_id}>{item.room_text}</Select.Option>
                        })
                    } */}
                </Select>
            </Form.Item>


            <Form.Item className={student_scss.formitem} name="questions_type_id" rules={[{ required: true }]}>
                <Select
                    style={{ width: "150px" }}
                >
                    {/*    {
                        paper.grade.map(item => {
                            return <Select.Option key={item.room_id} value={item.room_id}>{item.grade_name}</Select.Option>
                        })
                    } */}
                </Select>
            </Form.Item>


            <Form.Item className={student_scss.formitem} >
                <Button className={student_scss.formitem} type="primary" htmlType="submit">
                    搜索
                </Button>

                <Button type="primary">
                    重置
                </Button>
            </Form.Item>
        </Form>
        <Table dataSource={rolls.Studentlist} columns={columns} rowKey="student_id" pagination={{
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '20', '30', '40', '50', '100'],
            showTotal: detailTotal => `共 ${detailTotal} 条`,
            showQuickJumper: { goButton: '点我跳转' }
            // showQuickJumper: { goButton: <a>&emsp;点我跳转</a> }

        }}></Table>
        {/* 取消分页功能 */}
        {/* pagination={false} */}
    </div></ConfigProvider>)
}
export default StudentGrade