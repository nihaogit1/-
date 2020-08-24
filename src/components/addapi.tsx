// import { FormContext } from "antd/lib/form/context";
import React from 'react'
import { Form, Input, Button } from 'antd';
// import { FormInstance } from 'antd/lib/form';
import style from './User.module.scss';
// import { useObserver } from 'mobx-react-lite'

const addapi: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div className={style.box}>
            <Form form={form} onFinish={onFinish} >
                <Form.Item>
                    <button>添加api接口权限</button>
                </Form.Item>

                <Form.Item name="note" label="" rules={[{ required: true }]}>
                    <Input  placeholder='请输入api权限接口名称' />
                </Form.Item>
                <Form.Item name="note" label="" rules={[{ required: true }]}>
                    <Input  placeholder='请输入api权限接口url' />
                </Form.Item>
                <Form.Item name="note" label="" rules={[{ required: true }]}>
                    <Input  placeholder='请输入api权限接口方法' />
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) => {
                        return getFieldValue('gender') === 'other' ? (
                            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        ) : null;
                    }}
                </Form.Item>
                <Button type="primary" htmlType="submit" className={style.btns}>
                    提交
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    重置
                </Button>
            </Form>
        </div>
    )
}
export default addapi

