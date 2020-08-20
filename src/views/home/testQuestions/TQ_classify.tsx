import React , {useState,useEffect} from 'react';
import { Layout ,Button , Modal , Table,Input} from 'antd';
import { useObserver } from 'mobx-react-lite'
import useStore from '../../../context/usecontext'

export default function TQ_classify() {
  let [visible , updatavisible] = useState<boolean>(false);
    let { exam } = useStore()
    //获取试题类型
    useEffect(()=>{
      exam.getQuestionsAction()
      // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[])
    const showModal = () => {
      updatavisible(true)
    };
    const handleOk = () => {
      updatavisible(false);
      
    };
    const handleCancel = () => {
        updatavisible(false)
    };
    const columns = [
        {
          title: '类型ID',
          dataIndex: 'questions_type_id',
          key: 'questions_type_id',
        },
        {
          title: '类型名称',
          dataIndex: 'questions_type_text',
          key: 'questions_type_text',
        },
        {
          title: '操作',
          dataIndex: '',
          key: '',
        }
      ];
      return useObserver(()=><div className='typequestion'>
      <Layout.Content  
          className="typequestion-main"
          style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
          }}>
          <Button type="primary" onClick={showModal}>
          +添加类型
          </Button>
          <Modal
          title="创建新类型"
          visible = {visible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText='确定'
          cancelText='取消'
          >
          <Input placeholder="请输入类型名称"/>
          </Modal> 
          <Table rowKey={(r) => (r.questions_type_id ) } columns={columns} key='questions_type_id' dataSource={exam.questionTypes} />     
      </Layout.Content>
  </div>)
}
