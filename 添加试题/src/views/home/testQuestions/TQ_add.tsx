import React, { useEffect, useState } from 'react';
import usecontext from '../../../context/usecontext';
import { useObserver } from 'mobx-react-lite';
import toAdds from './toAdd.module.scss'
// import { Layout, Form, Input, Select, Button, message } from 'antd'
import { Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch } from 'antd';
const { Option } = Select;
export default function TestQuestions() {
    let { mirChen } = usecontext()
    useEffect(() => {
        mirChen.question()
    }, [])
    // const [componentSize, setComponentSize] = useState('default');
    // const onFormLayoutChange = ({ size }) => {
    // setComponentSize(size);
    // };
    function onChange(value: any) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val: any) {
        console.log('search:', val);
    }
    return useObserver(() =>
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            // initialValues={{ size: componentSize }}
            // onValuesChange={onFormLayoutChange}
            // size={componentSize}
            >
                <h3>题目信息</h3>
                <label>题干</label>
                <Form.Item label="" >
                    <Input placeholder='请输入题目标题，不能超过20字' className={toAdds.inp}/>
                </Form.Item>
                <p>题目主题</p>
                <Form.Item label="" >
                        <ul className={toAdds.uls}>
                            <li>上一步(ctrl+z)</li>
                            <li>下一步(ctrl+y)</li>
                            <li>H1</li>
                            <li>H2</li>
                            <li>H3</li>
                            <li>H4</li>
                        </ul>
                        <div>
                            <ul>
                                <li>1</li>
                                {/* <li>2</li>
                                <li>3</li> */}
                            </ul>
                            <p>标题</p>
                            <textarea name="" id="" placeholder='请输入内容' cols={Number(120)} rows={Number(10)}></textarea>
                        </div>
                </Form.Item>
                <Form.Item label="">
                    <p>请选择考试类型：</p>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option: any) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>

                    </Select>
                </Form.Item>
                <Form.Item label="">
                    <p>请选择课程类型：</p>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option: any) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>

                    </Select>
                </Form.Item>
                <Form.Item label="">
                    <p>请选择题目类型：</p>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option: any) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>

                    </Select>
                </Form.Item>


                <p>答案信息</p>
                <Form.Item label="" >
                        <ul className={toAdds.uls}>
                            <li>上一步(ctrl+z)</li>
                            <li>下一步(ctrl+y)</li>
                            <li>H1</li>
                            <li>H2</li>
                            <li>H3</li>
                            <li>H4</li>
                        </ul>
                        <div>
                            <ul>
                                <li>1</li>
                                {/* <li>2</li>
                                <li>3</li> */}
                            </ul>
                            <p>标题</p>
                            <textarea name="" id="" placeholder='请输入内容' cols={Number(120)} rows={Number(10)}></textarea>
                        </div>
                </Form.Item>

                <Form.Item label="">
                    <Button>提交</Button>
                </Form.Item>
            </Form>
        </>
    )
}