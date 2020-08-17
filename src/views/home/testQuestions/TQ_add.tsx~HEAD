import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import style from './toAdd.module.scss';
import Editor from 'for-editor' //  Markdow编辑器插件
import { useObserver } from 'mobx-react-lite'
let { Option } = Select
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (values: any) => {
    console.log('Success:', values);
};
function TQ_add() {

    return useObserver(()=>
        <div className={style.addquest}>
            <Form
                className={style.form}
                onFinish={onFinish}
            >
                <h3>题目信息</h3>
                <p>题干</p>
                <Form.Item
                    label=""
                    name="text"
                    rules={[{ required: true, message: 'Please input your text!' }]}
                >
                    <Input placeholder='请输入题目，不超过20字' style={{ width: 400 }} />
                </Form.Item>
                <p>题目主题</p>
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: '请输入内容' }]}
                >
                    <Editor placeholder='请输入内容...' style={{ height: 200 }} />
                </Form.Item>
                <p>请选择周考类型：</p>
                <Form.Item
                    name="exam_id"
                    rules={[{ required: true }]}
                >
                    <Select style={{ width: 200 }} placeholder='周考一'>
                        <Option value="周考一">周考一</Option>
                    </Select>
                </Form.Item>

                <p>请选择课程类型：</p>
                <Form.Item
                    name="subject_id"
                    rules={[{ required: true }]}
                >
                    <Select style={{ width: 200 }} placeholder='JavaScript上'>
                        <Option value="JavaScript上" >JavaScript上</Option>
                    </Select>
                </Form.Item>

                <p>请选择题目类型：</p>
                <Form.Item
                    name="questions_type_id"
                    rules={[{ required: true }]}
                >
                    <Select style={{ width: 200 }} placeholder='简答题'>
                        <Option value="简答题">简答题</Option>
                    </Select>
                </Form.Item>

                <p>答案信息</p>
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: '请输入内容' }]}
                >
                    <Editor placeholder='请输入内容...' style={{ height: 200 }} />
                </Form.Item>    

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                        </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default TQ_add