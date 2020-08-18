import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { Form, Input, Button, Select, InputNumber, DatePicker } from 'antd'

const Examadd: React.FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    }

    return useObserver(() => <Form
        name="basic"
        initialValues={{}}
        onFinish={onFinish}
        style={{ background: "#fff", padding: "50px 25px", borderRadius: "10px", }}
    >
        <p>试卷名称:</p>
        < Form.Item
            {...{
                wrapperCol: { span: 11 }
            }}
            name="title"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>

        <p>请选择考试类型：</p>
        <Form.Item name="exam_id"  {...{ wrapperCol: { span: 3 } }} rules={[{ required: true }]}>
            <Select
            >
                {/* {
                    exam.examType.map(item => {
                        return <Select.Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Select.Option>
                    })
                } */}
            </Select>
        </Form.Item>

        <p>请选择课程：</p>
        <Form.Item name="subject_id" {...{ wrapperCol: { span: 3 } }} rules={[{ required: true }]}>
            <Select
            >
                {/*   {
                    exam.subject.map(item => {
                        return <Select.Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Select.Option>
                    })
                } */}
            </Select>
        </Form.Item>

        <p>设置题量:</p>
        <Form.Item name="number" rules={[{ required: true }]}>
            <InputNumber min={3} max={10} />
        </Form.Item>

        <p>开始时间:</p>
        <Form.Item name="start_time" rules={[{ required: true }]}>
            <DatePicker showTime />
        </Form.Item>

        <p>结束时间:</p>
        <Form.Item name="end_time" rules={[{ required: true }]}>
            <DatePicker showTime />
        </Form.Item>

        <Form.Item >
            <Button type="primary" htmlType="submit">
                创建试卷
        </Button>
        </Form.Item>

    </Form>)
}
export default Examadd
