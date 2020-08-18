import React from 'react'
import { useObserver } from 'mobx-react-lite'
import style from './exam.module.scss'
import { Form, Button, Select, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

const Examlist: React.FC = () => {
    const dataSource = [
        {
            key: '1',
            name: '阮一峰',
            age: 32,
            address: '北京朝阳区',
        },
        {
            key: '2',
            name: '廖雪峰',
            age: 42,
            address: '北京海淀区',
        },
    ]

    const columns = [
        {
            title: '试卷信息',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '班级',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '创建人',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '开始时间',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '结束时间',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            dataIndex: 'address',
            key: 'address',
        }
    ]
    //  表单信息
    const onFinish = (values: any) => {
        console.log('Success:', values);
    }

    return useObserver(() => <div className={style.examlist}>
        <Form
            className={style.form}
            name="basic"
            initialValues={{}}
            onFinish={onFinish}
        >
            <Form.Item
                className={style.foitem}
                label='考试类型:'
                name="exam_id"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Select
                    style={{ width: "250px" }}
                >
                    {/* {
                        exam.examType.map(item => {
                            return <Select.Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Select.Option>
                        })
                    } */}
                </Select>
            </Form.Item>

            <Form.Item
                className={style.foitem}
                label='课程:'
                name="subject_id"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Select
                    style={{ width: "250px" }}
                >
                    {/* {
                        exam.subject.map(item => {
                            return <Select.Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Select.Option>
                        })
                    } */}
                </Select>
            </Form.Item>

            <Form.Item className={style.foitem}>
                <Button type='primary' htmlType="submit" icon={<SearchOutlined />}>
                    查询
                </Button>
            </Form.Item>
        </Form>

        <Table dataSource={dataSource} columns={columns} />
    </div>)
}
export default Examlist