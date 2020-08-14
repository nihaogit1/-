import React from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default function homt() {
    const data = {
        collapsed: false,
      }
      const onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
      
      };
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={data.collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="试题管理">
              <Menu.Item key="1">添加试题</Menu.Item>
              <Menu.Item key="2">试题分类</Menu.Item>
              <Menu.Item key="3">查看试题</Menu.Item>
            </SubMenu>
          <SubMenu key="sub2" icon={<UserOutlined />} title="用户管理">
              <Menu.Item key="4">添加用户</Menu.Item>
              <Menu.Item key="5">用户管理</Menu.Item>
            </SubMenu>
          <SubMenu key="sub3" icon={<UserOutlined />} title="考试管理">
              <Menu.Item key="6">添加考试</Menu.Item>
              <Menu.Item key="7">试卷列表</Menu.Item>
            </SubMenu>
         
            <SubMenu key="sub4" icon={<UserOutlined />} title="班级管理">
              <Menu.Item key="8">班级管理</Menu.Item>
              <Menu.Item key="9">教室管理</Menu.Item>
              <Menu.Item key="10">学生管理</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<TeamOutlined />} title="阅卷管理">
              <Menu.Item key="11">待批班级</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
        </div>
    )
}
