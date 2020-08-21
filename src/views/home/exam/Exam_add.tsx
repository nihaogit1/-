<<<<<<< HEAD
import React,{useEffect} from 'react'
import { Input, DatePicker, Space, Button,Select} from 'antd';
import Exams from "./scss/exam.module.scss"
import usecontext from "../../../context/usecontext"
import {useObserver} from 'mobx-react-lite'
const { Option } = Select;

export default function Exam(props: any) {
    const {Exam,eidt} = usecontext()
    useEffect(()=>{
        Exam.getsubjectType()
        Exam.getgetexamTypeList()
        Exam.getQuestionsTypeList()
        eidt.getquestionsList()
    }, [])
    // 日期框框
    let start_time: number  = 0;
    let end_time: number  = 0;
    // 获取当前时间
    function onChange(date: any, dateString: any) {
        // console.log(date, dateString);
        let data = new Date(dateString)
        let time1 = data.getTime();
        start_time = time1;
    }
    // 获取结束时间
    function onChang(date: any, dateString: any){
        let data = new Date(dateString)
        let time1 = data.getTime();
        end_time = time1;
    }
    const currentEditOption = {
        roleId: '',
        title: '',
    };
    let subject_id: string ="";
     const handleSelect = (value:any, option: any) => {
        /* option返回的是option对应的整个对象 */
        subject_id = option.key;
        console.log(option,subject_id)
    };
    let examId: string  = "";
    const handleSelect1 = (value:any, option: any) => {
        /* option返回的是option对应的整个对象 */
        examId = option.key;
        console.log(option,examId)};
    const submitdata=()=>{
        let value = (document.querySelector('input') as HTMLInputElement)?.value
        Exam.getexamdataList(props,subject_id,examId,value,start_time,end_time);  
    }
    return useObserver(()=>
        <div className={Exams.wrap}>
            <div className={Exams.head}>
                <h3>添加考试</h3>
            </div>
            <div className={Exams.main}>
                {/* 输入框 */}
                <li className={Exams.lis}>
                    <p><i className={Exams.ico}>*</i>试卷名称:</p>
                    <Input className={Exams.inp} placeholder="" />
                </li>
                {/* 下拉框 */}
                <li className={Exams.lis}>
                    <p><i className={Exams.ico}>*</i>选择考试类型:</p>
                    <Select
                    labelInValue
                    onChange={handleSelect1}
                    style={{width: '30%'}}
                    getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
                    >
            
                        {Exam.examTypeList.map((item,index)=>{
                            return <Option key={item.exam_id} value={item.exam_name}>{item.exam_name}</Option>
                        })}
                    </Select>
                 
              </li>
                {/* 课程选择 */}
                <li className={Exams.lis}>
                    <p><i className={Exams.ico}>*</i>课程选择:</p>
                    <Select
                    labelInValue
                    onChange={handleSelect}
                    style={{width: '70%'}}
                    getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
                    >
                        {Exam.subjectType.map((item,index)=>{
                        return <Option key={item.subject_id} value={item.subject_text}>{item.subject_text}</Option>
                        })}
                    </Select>
              </li>
                {/* 日期 */}
                <li className={Exams.lis}>
                    <p><i className={Exams.ico}>*</i>考试时间:</p>
                    <Space direction="vertical" className={Exams.flexbox}>
                        <DatePicker onChange={onChange} placeholder="开始时间" />-<DatePicker onChange={onChang} placeholder="结束时间" />
                    </Space>,
              </li>
                <li>
                    <Button type="primary" htmlType="submit" className={Exams.btn} onClick={submitdata}>
                        创建考试
                    </Button>
                </li>
            </div>
            <div className={Exams.foot}></div>
            <div>
            </div>
        </div>
    )
}

// import React from 'react'
// import { useObserver } from 'mobx-react-lite'
// import { Form, Input, Button, Select, InputNumber, DatePicker } from 'antd'

// const Examadd: React.FC = () => {

//     const onFinish = (values: any) => {
//         console.log('Success:', values);
//     }

//     return useObserver(() => <Form
//         name="basic"
//         initialValues={{}}
//         onFinish={onFinish}
//         style={{ background: "#fff", padding: "50px 25px", borderRadius: "10px", }}
//     >
//         <p>试卷名称:</p>
//         < Form.Item
//             {...{
//                 wrapperCol: { span: 11 }
//             }}
//             name="title"
//             rules={[{ required: true, message: 'Please input your username!' }]}
//         >
//             <Input />
//         </Form.Item>

//         <p>请选择考试类型：</p>
//         <Form.Item name="exam_id"  {...{ wrapperCol: { span: 3 } }} rules={[{ required: true }]}>
//             <Select
//             >
//                 {/* {
//                     exam.examType.map(item => {
//                         return <Select.Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Select.Option>
//                     })
//                 } */}
//             </Select>
//         </Form.Item>

//         <p>请选择课程：</p>
//         <Form.Item name="subject_id" {...{ wrapperCol: { span: 3 } }} rules={[{ required: true }]}>
//             <Select
//             >
//                 {/*   {
//                     exam.subject.map(item => {
//                         return <Select.Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Select.Option>
//                     })
//                 } */}
//             </Select>
//         </Form.Item>

//         <p>设置题量:</p>
//         <Form.Item name="number" rules={[{ required: true }]}>
//             <InputNumber min={3} max={10} />
//         </Form.Item>

//         <p>开始时间:</p>
//         <Form.Item name="start_time" rules={[{ required: true }]}>
//             <DatePicker showTime />
//         </Form.Item>

//         <p>结束时间:</p>
//         <Form.Item name="end_time" rules={[{ required: true }]}>
//             <DatePicker showTime />
//         </Form.Item>

//         <Form.Item >
//             <Button type="primary" htmlType="submit">
//                 创建试卷
//         </Button>
//         </Form.Item>

//     </Form>)
// }
// export default Examadd
=======
import React,{useEffect} from 'react'
import { Input, DatePicker, Space, Button,Select} from 'antd';
import Exams from "./scss/exam.module.scss"
import usecontext from "../../../context/usecontext"
import {useObserver} from 'mobx-react-lite'
const { Option } = Select;

export default function Exam(props: any) {
    const {Exam,eidt} = usecontext()
    useEffect(()=>{
        Exam.getsubjectType()
        Exam.getgetexamTypeList()
        Exam.getQuestionsTypeList()
        eidt.getquestionsList()
    }, [Exam, eidt])
    // 日期框框
    let start_time: number  = 0;
    let end_time: number  = 0;
    // 获取当前时间
    function onChange(date: any, dateString: any) {
        // console.log(date, dateString);
        let data = new Date(dateString)
        let time1 = data.getTime();
        start_time = time1;
    }
    // 获取结束时间
    function onChang(date: any, dateString: any){
        let data = new Date(dateString)
        let time1 = data.getTime();
        end_time = time1;
    }
    let subject_id: string ="";
     const handleSelect = (value:any, option: any) => {
        /* option返回的是option对应的整个对象 */
        subject_id = option.key;
        console.log(option,subject_id)
    };
    let examId: string  = "";
    const handleSelect1 = (value:any, option: any) => {
        /* option返回的是option对应的整个对象 */
        examId = option.key;
       };
    const submitdata=()=>{
        let value = (document.querySelector('input') as HTMLInputElement)?.value
        Exam.getexamdataList(props,subject_id,examId,value,start_time,end_time);  
    }
    return useObserver(()=>
        <div className={Exams.wrap}>
            <div className={Exams.head}>
                <h3>添加考试</h3>
            </div>
            <div className={Exams.main}>
                {/* 输入框 */}
                <li className={Exams.lis}>
                    <p><i className={Exams.ico}>*</i>试卷名称:</p>
                    <Input className={Exams.inp} placeholder="" />
                </li>
                {/* 下拉框 */}
                <li className={Exams.lis}>
                    <p><i className={Exams.ico}>*</i>选择考试类型:</p>
                    <Select
                    labelInValue
                    onChange={handleSelect1}
                    style={{width: '30%'}}
                    getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
                    >
            
                        {Exam.examTypeList.map((item,index)=>{
                            return <Option key={item.exam_id} value={item.exam_name}>{item.exam_name}</Option>
                        })}
                    </Select>
                 
              </li>
                {/* 课程选择 */}
                <li className={Exams.lis}>
                    <p><i className={Exams.ico}>*</i>课程选择:</p>
                    <Select
                    labelInValue
                    onChange={handleSelect}
                    style={{width: '70%'}}
                    getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
                    >
                        {Exam.subjectType.map((item,index)=>{
                        return <Option key={item.subject_id} value={item.subject_text}>{item.subject_text}</Option>
                        })}
                    </Select>
              </li>
                {/* 日期 */}
                <li className={Exams.lis}>
                    <p><i className={Exams.ico}>*</i>考试时间:</p>
                    <Space direction="vertical" className={Exams.flexbox}>
                        <DatePicker onChange={onChange} placeholder="开始时间" />-<DatePicker onChange={onChang} placeholder="结束时间" />
                    </Space>,
              </li>
                <li>
                    <Button type="primary" htmlType="submit" className={Exams.btn} onClick={submitdata}>
                        创建考试
                    </Button>
                </li>
            </div>
            <div className={Exams.foot}></div>
            <div>
            </div>
        </div>
    )
}

>>>>>>> 77107653a473225fd6a03345c1a98c335d39c710
