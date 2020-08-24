// import { FormContext } from "antd/lib/form/context";
import React from 'react'
import { Form, Input, Button, Select } from 'antd';
// import { FormInstance } from 'antd/lib/form';
import style from './User.module.scss';
// import { useObserver } from 'mobx-react-lite'

const { Option } = Select;
// const addUser: React.FC = () => {
//     const [form] = Form.useForm();

//     const onGenderChange = (value: any) => {
//         switch (value) {
//             case "male":
//                 form.setFieldsValue({ note: "Hi, man!" });
//                 return;
//             case "female":
//                 form.setFieldsValue({ note: "Hi, lady!" });
//                 return;
//             case "other":
//                 form.setFieldsValue({ note: "Hi there!" });
//                 return;
//         }
//     };
//     const onFinish = (values: any) => {
//         console.log(values);
//     };

//     const onReset = () => {
//         form.resetFields();
//     };

//     return (
//         <div className={style.box}>
//             <Form form={form} onFinish={onFinish} >
//                 <Form.Item>
//                    <span>添加用户</span><span>更新用户</span>
//                 </Form.Item>
//                 <Form.Item name="gender" label="" rules={[{ required: true }]}>
//                     <Select
//                         style={{ width: 160 }}
//                         placeholder="请输入id"
//                         onChange={onGenderChange}
//                         allowClear
//                     >
//                         <Option value="male">male</Option>
//                     </Select>
//                 </Form.Item>
//                 <Form.Item name="note" label="" rules={[{ required: true }]}>
//                     <Input style={{ width: 350 }} placeholder='请输入用户名' className={style.ant_input} />
//                 </Form.Item>
//                 <Form.Item name="note" label="" rules={[{ required: true }]}>
//                     <Input style={{ width: 350 }} placeholder='请输入用户名2' />
//                 </Form.Item>
//                 <Form.Item name="gender" label="" rules={[{ required: true }]}>
//                     <Select
//                         style={{ width: 160 }}
//                         placeholder="请输入id"
//                         onChange={onGenderChange}
//                         allowClear
//                     >
//                         <Option value="male">male</Option>
//                     </Select>
//                 </Form.Item>
//                 <Form.Item
//                     noStyle
//                     shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
//                 >
//                     {({ getFieldValue }) => {
//                         return getFieldValue('gender') === 'other' ? (
//                             <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
//                                 <Input />
//                             </Form.Item>
//                         ) : null;
//                     }}
//                 </Form.Item>
//                 <Button type="primary" htmlType="submit" className={style.btns}>
//                     提交
//                 </Button>
//                 <Button htmlType="button" onClick={onReset}>
//                     重置
//                 </Button>
//             </Form>
//         </div>
//     )
// }
// export default addUser


export default function adduser() {
    return (
        <div className={style.box}>
            <Form>
                <Form.Item style={{ marginBottom: 8 }}>
                    <span className={style.spans}>添加用户</span><span className={style.spans}>更新用户</span>
                </Form.Item>
                <Form.Item name="note1" label="" rules={[{ required: true }]} style={{ marginBottom: 8 }} >
                    <Input placeholder='请输入用户名' />
                </Form.Item>
                <Form.Item name="note" label="" rules={[{ required: true }]} style={{ marginBottom: 8 }} >
                    <Input placeholder='请输入用户名2' />
                </Form.Item>
                <Form.Item name="gender" label="" rules={[{ required: true }]}>
                    <Select
                        style={{ width: '50%' }}
                        placeholder="请输入id"
                        // onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male" >male</Option>
                    </Select>
                </Form.Item>
                <Button type="primary" htmlType="submit" className={style.btns}>
                    提交
                </Button>
                <Button htmlType="button" >
                {/* onClick={onReset} */}
                    重置
                 </Button>
            </Form>
        </div >
    )
}
