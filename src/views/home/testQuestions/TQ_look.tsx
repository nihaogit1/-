import React, {useEffect, Fragment, useState}from 'react'
import { Tag, Select, Form, Button, List} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useStore from '../../../context/usecontext'
import {useObserver} from 'mobx-react-lite'
import { Store } from 'antd/lib/form/interface';
import { useHistory } from 'react-router-dom'
import { IGetQuestion } from '../../../utils/interface';
const { CheckableTag } = Tag;
export default function Exam() {
    const selectLayout = {
        labelCol: { offset: 0 },
    };
    let history = useHistory()
    let {exam} = useStore()
    // 定义选中的学科
    let [selectedTags, setSelectedTags] = useState<string []>([])

    //请求数据
    useEffect(() => {
        exam.getExamAction();
        exam.getSubjectAction();
        exam.getQuestionsAction();
        exam.getQuestionListAction()
    },[exam])
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
        // exam.getQuetsionAction(params);
    }
    const handleChangeItem = (item: any) =>{
        console.log(history)
        history.push({
            pathname:'/home/testQuestions/TQ_edit',
            state:{...item}
        })
        // history.replace('/home/testQuestions/TQ_edit',item)
        console.log(111);
        
       
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
        <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        style={{
            padding: 24,
            marginTop: 20
        }}
        dataSource={exam.questionList}
        renderItem={item => (
          <List.Item
          actions={[<span onClick={()=>{handleChangeItem(item)}}>编辑</span>]}
          >
            
              <List.Item.Meta
                title={item.title}
                description={item.user_name+'发布'}
              />
              <div>
                <Tag color="blue">{item.subject_text}</Tag>
                <Tag color="red">{item.questions_type_text}</Tag>
                <Tag color="volcano">{item.exam_name}</Tag>
                </div>
          </List.Item>
        )}
      />
        </section>            

        </Fragment>
    )
}








