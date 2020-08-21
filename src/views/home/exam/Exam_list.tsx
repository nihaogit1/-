import React, { useState, useEffect } from 'react'
import styles from "./scss/exam.module.scss"
import { Form, Select, Button, Radio, Table,} from 'antd'
import usestore from '../../../context/usecontext'
export default function Exam(props: any) {
    let [state, setState] = useState('large')
    const { eidt,Exam } = usestore()
    const handleSizeChange = (e: any) => {
        Exam.getgetexamTypeList()
        Exam.getsubjectType()
        setState(e.target.value);
    };
    useEffect(() => {
        eidt.getquestionsList()
    }, [eidt, eidt.examdata])

    // 转化时间
    const timestampToTime = (timestamp: number) => {

        var date = new Date(timestamp * 1);//时间戳为10位需*1000，时间戳为13位的话不需乘1000

        let Y = date.getFullYear() + '-';

        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';

        let D = date.getDate() + ' ';

        let h = date.getHours() + ':';

        let m = date.getMinutes() + ':';

        let s = date.getSeconds();

        return Y + M + D + h + m + s;

    }
 
    const columns = [
        {
            title: '试卷信息',
            dataIndex: 'title',
            key:1,
            render:(text: any,record: any)=>{
                return <>
            <p>{record.title}</p>
            <span>开始时间{timestampToTime(Number(record.start_time))}</span>
            <span>{record.num}作弊0分</span>
            </>
            }
          },
          {
            title: '班级',
            dataIndex: 'grade_name',
            key:2
    
          },
          {
            title: '创建人',
            dataIndex: 'user_name',
            key:3
        
          },
          {
            title: '开始时间',
            dataIndex: 'start_time',
            key:4,
            render:(text: any,record: any)=>{
                return <>
            <span>开始时间{timestampToTime(Number(record.start_time))}</span>
            </>
            }
          },
          {
            title: '结束时间',
            dataIndex: 'end_time',
            key:5,
            render:(text: any,record: any)=>{
                return <>
            <span>结束时间{timestampToTime(Number(record.end_time))}</span>
            </>
            }
          },
          {
            title: '操作',
            key:6,
            dataIndex:"<span>详情</span>",
            render:(text: any,record: any)=>{
                return <>
                 <a onClick={()=>eidt.getgetg2dtsAction(props)}>详情</a>
                </>
            }
          },
    ]
    return (
        <div className={styles.wrap}>
            <div className={styles.head}>
                <h2>试卷列表</h2>
            </div>
            <div className={styles.flexbox2}>
                <Form.Item label="考试类型" className={styles.inpts}>
                    <Select className={styles.inpts} onChange={eidt.handleChangeItem1}>
                        {
                            Exam.examTypeList.map((item: any) => {
                                return <Select.Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Select.Option>
                            })
                        }

                    </Select>
                </Form.Item>
                <Form.Item label="课程" className={styles.inpts}>
                    <Select className={styles.inpts} onChange={eidt.handleChangeItem}>
                        {
                            Exam.subjectType.map((item: any) => {
                                return <Select.Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Select.Option>
                            })
                        }
                    </Select>
                </Form.Item>
                <Button className={styles.btn3}>查询</Button>
            </div>
            <div className={styles.main}>
                <nav className={styles.flexbox2}>
                    <span>试卷列表</span>
                    <Radio.Group value={state} onChange={handleSizeChange} className={styles.Nav}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                    <div>
                    </div>
                </nav>
                <section>
              <Table 
              columns={columns} 
              dataSource = {eidt.examdata}
              rowKey = {(record)=>record.exam_exam_id}
              />);
                </section>
            </div>
            <div>
            </div>
        </div>
    )
}

