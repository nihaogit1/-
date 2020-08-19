import React, { useState, useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import room_scss from './share.module.scss'
import { Table, Button, Modal, Form, Input, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import usestore from '../../../context/usecontext'


const RoomGrade: React.FC = () => {
    let [isfale, setIsfale] = useState(false)
    let { Markall } = usestore()

    useEffect(() => {
        Markall.getRoom()
    }, [Markall])


    // 删除教室
    let delRom = (room_id: string) => {
        Markall.removeRoom({ room_id }).then(res => {
            console.log(res)
            Markall.getRoom()
            message.info(res.data.msg)
        })
    }

    const columns = [
        {
            title: '教师号',
            dataIndex: 'room_text',
            key: 'room_text'
        }, {
            title: '操作',
            dataIndex: 'room_id',
            key: 'room_id',
            render: (room_id: string) => {
                return <div style={{ color: 'blue', cursor: 'pointer' }} onClick={() => { delRom(room_id) }}>删除</div>
            }
        },
    ]

    let onFinish = (values: any) => {
        Markall.addRoom(values).then((res) => {
            console.log(res)
            Markall.getRoom()
            message.info(res.data.msg)
            setIsfale(!isfale)
        })
    };


    return useObserver(() => <div className={room_scss.grade}>
        <Modal title='添加教室'
            visible={isfale}
            footer={null}
            onCancel={() => setIsfale(!isfale)}
        >
            <p>教室号:</p>
            <Form
                name="basic"
                initialValues={{}}
                onFinish={onFinish}
            >

                <Form.Item
                    name="room_text"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button
                        onClick={() => { setIsfale(!isfale) }}
                        style={{ marginRight: "20px" }}
                    >
                        取消
                    </Button>

                    <Button type="primary" htmlType='submit'>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Modal>

        <Button className={room_scss.but}
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={() => { setIsfale(!isfale) }}
        >
            添加教室
                </Button>

        <Table dataSource={Markall.Roomlist} columns={columns} rowKey="room_id" />
    </div>)
}
export default RoomGrade