import React , { useEffect } from 'react'
import Editor from 'for-editor'
import { Layout, Form, Input, Select, Button} from 'antd'
import useStore from '../../../context/usecontext';
const Edit_Question:React.FC = (props) => {
    const titleLayout = {
        labelCol: { offset: 0 },
        wrapperCol: { offset: 0 },
    }
    const selectLayout = {
        labelCol: { offset: 0 },
        wrapperCol: { offset: 0, span: 6 },
    };
    // 获取表单实例
    const [ form ] =Form.useForm();
    // 拿数据
    let {exam} = useStore();

    //请求数据
    useEffect(() => {
        exam.getExamAction();
        exam.getSubjectAction();
        exam.getQuestionsAction();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return <div>
        <Layout.Content
            className="addquestion-main"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
        >
            <Form form={form}
                initialValues={{
                    questions_stem: ``,
                    title: '',
                    exam_id: '',
                    subject_id: '',
                    questions_type_id: '',
                    questions_answer: ''
                }}>
                <h3>题目信息</h3>
                <p>题干</p>
                <Form.Item
                    {...titleLayout}
                    name="questions_stem"
                    rules={[{ required: true, message: '请输入题目标题' }]}
                >
                    <Input placeholder="请输入题目标题" />
                </Form.Item>
                {/* 题目主干 */}
                <p>题目主题</p>
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: '请输入内容' }]}
                >
                    <Editor placeholder='请输入内容...' style={{ height: 200 }} />
                </Form.Item>
                {/* 选择考试类型 */}
                <p>请选择考试类型</p>
                <Form.Item {...selectLayout} name="exam_id">
                    <Select>{
                        exam.examTypes.map(item => {
                            return <Select.Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Select.Option>
                        })}
                    </Select>
                </Form.Item>

                {/* 选择课程类型 */}
                <p>请选择课程类型</p>
                <Form.Item {...selectLayout} name="subject_id">
                    <Select>{
                        exam.subjectTypes.map(item => {
                            return <Select.Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Select.Option>
                        })}
                    </Select>
                </Form.Item>

                {/* 选择题目类型 */}
                <p>选择题目类型</p>
                <Form.Item {...selectLayout} name="questions_type_id">
                    <Select>{
                        exam.questionTypes.map(item => {
                            return <Select.Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                {/* 答案信息 */}
                <p>答案信息</p>
                <Form.Item
                    name="questions_answer"
                    rules={[{ required: true, message: '请输入题目答案' }]}
                >
                    <Editor placeholder='请输入内容...' style={{ height: 200 }} />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Layout.Content>

    </div>
}


export default Edit_Question