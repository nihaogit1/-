// import { FormContext } from "antd/lib/form/context";
// import React from 'react'
// import { Form, Input, Button, Select} from 'antd';
// import { FormInstance } from 'antd/lib/form';
// import style from './User.module.scss';
// const { Option } = Select;

// const addRoures: React.FC = () => {
//     const [form] = Form.useForm();

//     const onFinish = (values: any) => {
//         console.log(values);
//     };

//     const onReset = () => {
//         form.resetFields();
//     };
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
//     return (
//         <div className={style.box}>
//             <Form form={form} onFinish={onFinish} className={style.boxTwo}>
//                 <Form.Item>
//                     <button>添加视图接口权限</button>
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
// export default addRoures
import React from 'react'
import style from './User.module.scss'

export default function addroutes() {
    return (
        <div className={style.box}>
            
        </div>
    )
}
