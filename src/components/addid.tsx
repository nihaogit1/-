<<<<<<< HEAD
// import { FormContext } from "antd/lib/form/context";
// import React from 'react'
// import { Form, Input, Button } from 'antd';
// import { FormInstance } from 'antd/lib/form';
// import style from './User.module.scss';

// const addid: React.FC = () => {
//     const [form] = Form.useForm();

//     const onFinish = (values: any) => {
//         console.log(values);
//     };

//     const onReset = () => {
//         form.resetFields();
//     };

//     return (
//         <div className={style.box}>
//             <Form form={form} onFinish={onFinish} className={style.form1}>
//                 <Form.Item>
//                     <button>添加身份</button>
//                 </Form.Item>
               
//                 <Form.Item name="note" label="" rules={[{ required: true }]}>
//                     <Input style={{ width: 350 }} placeholder='请输入用户名' />
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
// export default addid
import React from 'react'
import style from './User.module.scss'

export default function addid() {
    return (
        <div className={style.box}>
            
        </div>
    )
}
=======
// import { FormContext } from "antd/lib/form/context";
// import React from 'react'
// import { Form, Input, Button } from 'antd';
// import { FormInstance } from 'antd/lib/form';
// import style from './User.module.scss';

// const addid: React.FC = () => {
//     const [form] = Form.useForm();

//     const onFinish = (values: any) => {
//         console.log(values);
//     };

//     const onReset = () => {
//         form.resetFields();
//     };

//     return (
//         <div className={style.box}>
//             <Form form={form} onFinish={onFinish} className={style.form1}>
//                 <Form.Item>
//                     <button>添加身份</button>
//                 </Form.Item>
               
//                 <Form.Item name="note" label="" rules={[{ required: true }]}>
//                     <Input style={{ width: 350 }} placeholder='请输入用户名' />
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
// export default addid
import React from 'react'
import style from './User.module.scss'

export default function addid() {
    return (
        <div className={style.box}>
            
        </div>
    )
}
>>>>>>> 77107653a473225fd6a03345c1a98c335d39c710
