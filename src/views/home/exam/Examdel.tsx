import React from 'react'
import useTore from "../../../context/usecontext"
import {useObserver} from "mobx-react-lite"
// import Button from 'antd/lib/button'
import styles from "./scss/exam.module.scss"
export default function Examdel(props: any) {
const {eidt} = useTore()
// const {exam_id,subject_id} = props.location.state
  
    return useObserver(()=>
    <div className={styles.wrap}>
    <div className={styles.head}>
        <h3>阅卷详情</h3>
    </div>
    <div className={styles.main}>
        <header className={styles.flexbox1}>
         {/* <h2 className={styles.h3find}>{eidt.getg2dtsdata.title}</h2> */}
         <p className={styles.h3find}>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
        </header>
          <div className={styles.boxmain}>
              {
                  eidt.getg2dtsdata.map((item: any,index: any)=>{
                      return <div key={index} className={styles.boxwrap}>
                       <p><span>{item.questions_type_text}</span>></p>
                       <p><span>{item.title}</span></p>
                       <div className={styles.box}>
                       <p><span>{item.questions_answer}</span></p>
                       <p><span>{item.questions_stem}</span></p>
                       </div>
                       
                      </div>
                  })
              }
          </div>
    </div>
</div>
)
    
}
