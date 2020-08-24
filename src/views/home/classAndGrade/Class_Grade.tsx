import React, { useState, useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import style from './classadd.module.scss'
import { Modal, Table, Button, Form, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import userStore from '../../../context/usecontext'

const ClassGrade: React.FC = (props: any) => {
    const { rolls, Exam } = userStore()
    let [isfale, setIsfale] = useState(false)
    let [types, setTypes] = useState('')
    // let [state, setState] = useState()
    useEffect(() => {
        rolls.getRoom()
        rolls.getgradeAction()
        Exam.getsubjectType()
        // setState(rolls.markList)
    }, [isfale])

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
        setIsfale(!isfale)
    }
    // 删除
    let delLi = (data: any) => {
        rolls.roomDelete(props, { grade_id: data })

    }
    // 表单
    const onFinish = (values: any) => {
        console.log(values);

        const data = {
            grade_name: values.grade_name,
            room_id: values.room_id,
            subject_id: values.subject_id
        }
        rolls.addGrade(data)
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
                        {
                            rolls.Roomlist.map((item: { room_id: string | number; room_text: React.ReactNode; }) => {
                                return <Select.Option key={item.room_id} value={item.room_id}>{item.room_text}</Select.Option>
                            })
                        }
                    </Select>
                </Form.Item>

                <p>课程名：</p>
                <Form.Item className={style.formitem} name="subject_id" rules={[{ required: true }]}>
                    <Select
                    >
                        {
                            Exam.subjectType.map((item: { subject_id: string | number; subject_text: React.ReactNode; }) => {
                                return <Select.Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Select.Option>
                            })
                        }
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
        <Table columns={columns} dataSource={rolls.markList} rowKey={(record) => record.grade_id} />
    </div>)
}
export default ClassGrade