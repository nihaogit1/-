<<<<<<< HEAD
import React from 'react'
import { useObserver } from 'mobx-react-lite'
import student_scss from './classadd.module.scss'
import { Table, Form, Input, Button, Select } from 'antd'

const StudentGrade: React.FC = () => {
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
            render: () => {
                return <span>删除</span>
            }
        },
    ]

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return useObserver(() => <div className={student_scss.student}>
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
        <Table columns={columns} rowKey="student_id"></Table>
    </div>)
}
=======
import React from 'react'
import { useObserver } from 'mobx-react-lite'
import student_scss from './classadd.module.scss'
import { Table, Form, Input, Button, Select } from 'antd'

const StudentGrade: React.FC = () => {
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
            render: () => {
                return <span>删除</span>
            }
        },
    ]

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return useObserver(() => <div className={student_scss.student}>
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
        <Table columns={columns} rowKey="student_id"></Table>
    </div>)
}
>>>>>>> 77107653a473225fd6a03345c1a98c335d39c710
export default StudentGrade