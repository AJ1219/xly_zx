import React, { Component } from 'react'
import { Tabs } from 'antd'
import './OpTabs.css'

const TabPane = Tabs.TabPane;

class OpTabs extends Component {
  render() {
    const { 
      userInfo: {
        learningLesson
      } 
    } = this.props
    return (
      <Tabs defaultActiveKey="1" onChange={null}>
        <TabPane tab="Tab 1" key="1">课程信息</TabPane>
        <TabPane tab="Tab 2" key="2">满意度反馈</TabPane>
      </Tabs>
    )
  }
}

export default OpTabs