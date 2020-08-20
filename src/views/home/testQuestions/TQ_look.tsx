import React, {useEffect, Fragment, useState}from 'react'
import { Tag, Select, Form, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useStore from '../../../context/usecontext'
import {useObserver} from 'mobx-react-lite'
import { Store } from 'antd/lib/form/interface';
// import { useHistory } from 'react-router-dom'
import { IGetQuestion } from '../../../utils/interface';
const { CheckableTag } = Tag;
export default function Exam() {
    const selectLayout = {
        labelCol: { offset: 0 },
    };
    let {exam} = useStore()
    // 定义选中的学科
    let [selectedTags, setSelectedTags] = useState<string []>([])

    //请求数据
    useEffect(() => {
        exam.getExamAction();
        exam.getSubjectAction();
        exam.getQuestionsAction();
        exam.getQuestionListAction()
    },[])
       //处理学科选择
       const handleChange = (text:string, checked:boolean)=>{
        if (checked){
            setSelectedTags([text]);
        }else{
            setSelectedTags([]);
        }
    }
    const search = (values: Store)=>{
        let params:IGetQuestion = {};
        if (selectedTags.length){
            params.subject_id = selectedTags[0];
        }
        if (values.exam_id){
            params.exam_id = values.exam_id;
        }
        if (values.questions_type_id){
            params.questions_type_id = values.questions_type_id;
        }
        exam.getQuetsionAction(params);
    }
    return useObserver(()=><Fragment>
         <Form
            onFinish={search}
            className='search-title'
            style={{
                padding: 24,
                margin: 0,
                minHeight: 200,
            }}
        >
            <div className='subject_title'>
                <span style={{ marginRight: 8 }}>课程类型:</span>
                {exam.subjectTypes.map(item => (
                    <CheckableTag
                        key={item.subject_id}
                        checked={selectedTags.indexOf(item.subject_id) > -1}
                        onChange={checked => handleChange(item.subject_id, checked)}
                    >
                        {item.subject_text}
                    </CheckableTag>
                ))}
            </div>
            <div className='seach'>
                <Form.Item label="考试类型" name="exam_id" {...selectLayout} >  
                    <Select>{
                        exam.examTypes.map(item=>{
                            return <Select.Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item label="题目类型" name="questions_type_id" {...selectLayout} >  
                    <Select>{
                        exam.questionTypes.map(item=>{
                            return <Select.Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>查询</Button>
                </Form.Item>
            </div>
        </Form>
        <section>
            {
                JSON.stringify(exam.questionList)
            }
        </section>              

        </Fragment>
    )
}










