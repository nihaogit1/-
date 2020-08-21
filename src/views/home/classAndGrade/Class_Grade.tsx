<<<<<<< HEAD
import React, { useState } from 'react'
import { useObserver } from 'mobx-react-lite'
import style from './classadd.module.scss'
import { Modal, Table, Button, Form, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const ClassGrade: React.FC = () => {
    let [isfale, setIsfale] = useState(false)
    let [types, setTypes] = useState('')

    const columns = [
        {
            title: '班级名',
            dataIndex: 'grade_name',
            key: 'grade_name',
        },
        {
            title: '课程名',
            dataIndex: 'subject_text',
            key: 'subject_text',
        },
        {
            title: '教室号',
            dataIndex: 'room_text',
            key: 'room_text',
        },
        {
            title: '操作',
            dataIndex: "grade_id",
            render: (grade_id: any) => {
                return <div style={{ color: "#00f" }}>
                    <span onClick={() => pudli(grade_id)}>修改 </span>- | -
                <span onClick={() => { delLi(grade_id) }}> 删除</span>
                </div>
            }
        },
    ]

    // 修改
    let pudli = (grade_id: any) => {
    }
    // 删除
    let delLi = (grade_id: any) => {
    }

    // 表单
    const onFinish = (values: any) => {
        setIsfale(!isfale)
    }


    return useObserver(() => <div className={style.grade}>
        <Modal
            title='添加班级'
            visible={isfale}
            footer={null}
            onCancel={() => setIsfale(!isfale)}
        >

            <Form
                name="basic"
                initialValues={{}}
                onFinish={onFinish}
            >
                {types === '添加' ? '' : <Form.Item
                    label="班级ID"
                    name="grade_id"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input disabled={true} />
                </Form.Item>}

                <p>班级名:</p>
                <Form.Item
                    name="grade_name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input disabled={types === "添加" ? false : true} />
                </Form.Item>

                <p>教室号</p>
                <Form.Item className={style.formitem} name="room_id" rules={[{ required: true }]}>
                    <Select
                    >
                        {/*   {
                            banji.mangerRoom.map(item => {
                                return <Select.Option key={item.room_id} value={item.room_id}>{item.room_text}</Select.Option>
                            })
                        } */}
                    </Select>
                </Form.Item>

                <p>课程名：</p>
                <Form.Item className={style.formitem} name="subject_id" rules={[{ required: true }]}>
                    <Select
                    >
                        {/*   {
                            exam.subject.map(item => {
                                return <Select.Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Select.Option>
                            })
                        } */}
                    </Select>
                </Form.Item>


                <Form.Item>
                    <Button
                        onClick={() => setIsfale(!isfale)}
                        style={{ marginRight: "20px" }} >
                        取消
                    </Button>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>

            </Form>
        </Modal>






        <Button
            className={style.but}
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={() => {
                setIsfale(!isfale)
                setTypes("添加")
                // form.resetFields(["grade_name", "room_id", "subject_id", "grade_id"])
            }}
        >
            添加班级
        </Button>
        <Table columns={columns} rowKey="grade_id" />
    </div>)
}
=======
import React, { useState } from 'react'
import { useObserver } from 'mobx-react-lite'
import style from './classadd.module.scss'
import { Modal, Table, Button, Form, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const ClassGrade: React.FC = () => {
    let [isfale, setIsfale] = useState(false)
    let [types, setTypes] = useState('')

    const columns = [
        {
            title: '班级名',
            dataIndex: 'grade_name',
            key: 'grade_name',
        },
        {
            title: '课程名',
            dataIndex: 'subject_text',
            key: 'subject_text',
        },
        {
            title: '教室号',
            dataIndex: 'room_text',
            key: 'room_text',
        },
        {
            title: '操作',
            dataIndex: "grade_id",
            render: (grade_id: any) => {
                return <div style={{ color: "#00f" }}>
                    <span onClick={() => pudli(grade_id)}>修改 </span>- | -
                <span onClick={() => { delLi(grade_id) }}> 删除</span>
                </div>
            }
        },
    ]

    // 修改
    let pudli = (grade_id: any) => {
    }
    // 删除
    let delLi = (grade_id: any) => {
    }

    // 表单
    const onFinish = (values: any) => {
        setIsfale(!isfale)
    }


    return useObserver(() => <div className={style.grade}>
        <Modal
            title='添加班级'
            visible={isfale}
            footer={null}
            onCancel={() => setIsfale(!isfale)}
        >

            <Form
                name="basic"
                initialValues={{}}
                onFinish={onFinish}
            >
                {types === '添加' ? '' : <Form.Item
                    label="班级ID"
                    name="grade_id"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input disabled={true} />
                </Form.Item>}

                <p>班级名:</p>
                <Form.Item
                    name="grade_name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input disabled={types === "添加" ? false : true} />
                </Form.Item>

                <p>教室号</p>
                <Form.Item className={style.formitem} name="room_id" rules={[{ required: true }]}>
                    <Select
                    >
                        {/*   {
                            banji.mangerRoom.map(item => {
                                return <Select.Option key={item.room_id} value={item.room_id}>{item.room_text}</Select.Option>
                            })
                        } */}
                    </Select>
                </Form.Item>

                <p>课程名：</p>
                <Form.Item className={style.formitem} name="subject_id" rules={[{ required: true }]}>
                    <Select
                    >
                        {/*   {
                            exam.subject.map(item => {
                                return <Select.Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Select.Option>
                            })
                        } */}
                    </Select>
                </Form.Item>


                <Form.Item>
                    <Button
                        onClick={() => setIsfale(!isfale)}
                        style={{ marginRight: "20px" }} >
                        取消
                    </Button>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>

            </Form>
        </Modal>






        <Button
            className={style.but}
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={() => {
                setIsfale(!isfale)
                setTypes("添加")
                // form.resetFields(["grade_name", "room_id", "subject_id", "grade_id"])
            }}
        >
            添加班级
        </Button>
        <Table columns={columns} rowKey="grade_id" />
    </div>)
}
>>>>>>> 77107653a473225fd6a03345c1a98c335d39c710
export default ClassGrade