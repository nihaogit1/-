// import { FormContext } from "antd/lib/form/context";
// import React from 'react'
// import { Form, Input, Button, Select } from 'antd';
// import { FormInstance } from 'antd/lib/form';
// import style from './User.module.scss';
// import { useObserver } from 'mobx-react-lite'

// const { Option } = Select;
// const Setv: React.FC = () => {
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
//             <Form form={form} onFinish={onFinish} className={style.boxTwo}>
//                 <Form.Item>
//                     <button>给身份设置视图权限</button>
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
// export default Setv
import React from 'react'
import style from './User.module.scss'

export default function Setv() {
    return (
        <div className={style.box}>
            
        </div>
    )
}
