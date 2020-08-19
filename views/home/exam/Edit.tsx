import React from 'react'
import { Button } from 'antd';
import styles from './scss/exam.module.scss'
import {useObserver} from 'mobx-react-lite'
import Homts from '../../../components/homt'
import usecontext from "../../../context/usecontext"

export default function Edit(props: any) {
    const {Exam} = usecontext()

    const Alllsit = JSON.parse((window.sessionStorage.getItem('examdata') as string)) 
    const firer=()=>{
        props.history.push("/home/exam/Exam_list")
    }
    return useObserver(()=>
        <div className={styles.wrap}>
            <div className={styles.head}>
                <h3>创建考试</h3>
            </div>
            <div className={styles.main}>
            <Homts />
                <header className={styles.flexbox1}>
                 <h2 className={styles.h3find}>{Alllsit.data.title}</h2>
                 <p className={styles.h3find}>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
                </header>
                  <div className={styles.boxmain}>
                      {
                          Alllsit.data.questions.map((item: any,index: any)=>{
                              return <div key={index} className={styles.boxwrap}>
                               <p><span>{item.questions_type_text}</span><span className={styles.icos} onClick={()=>Exam.getdelQuestionsTypelist()}>删除</span></p>
                               <p><span>{item.title}</span></p>
                               <div className={styles.box}>
                               <p><span>{item.questions_answer}</span></p>
                               <p><span>{item.questions_stem}</span></p>
                               </div>
                               
                              </div>
                          })
                      }
                      <Button className={styles.btn2} onClick={firer}>创建试卷</Button>
                  </div>
            </div>
        </div>
    )
}
