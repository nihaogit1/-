import React from 'react'
import Logins from './login.module.scss';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import require from "../../utils/requre";
import { useHistory } from 'react-router-dom';
export default function Login() {
        let history = useHistory();
        const onFinish = (values: any) => {
            // console.log(values)
            // 保存账号密码
            require.post('/user/login', { user_name: values.username, user_pwd: values.password }).then(res => {
                console.log(res)
                if (res.data.code === 1) {
                    window.sessionStorage.setItem('token',res.data.token);
                    history.push('/home')
                }
            })
        }
   
    return (
        <div className={Logins.login}>
            <div className={Logins.tab}>
                <Form
                    name="normal_login"
                    className={Logins.login_form}
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="输入用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="输入密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <div className={Logins.ant_form_item_control_input_content}>

                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>

                            <a className={Logins.login_form_forgot} href="/">
                                忘记密码
                            </a>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={Logins.ant_btn_primary}>
                            登陆
                            </Button>

                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}