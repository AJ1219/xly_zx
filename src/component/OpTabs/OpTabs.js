import React, { Component } from 'react'
import { Tabs } from 'antd'
import './OpTabs.css'
import ButtonGroup from '../../component/ButtonGroup/ButtonGroup'
import DataTables from '../../component/DataTables/DataTables'

const TabPane = Tabs.TabPane;

class OpTabs extends Component {
  render() {
    const { 
      lessonInfo,
      userInfo: {
        learningLesson
      }
    } = this.props
    return (
      <Tabs tabBarStyle={{padding: '0 20px'}} defaultActiveKey="1" onChange={null}>
        <TabPane className="tab-pane" tab="课程信息" key='1'>
          <ButtonGroup customButtons={learningLesson}/>
          <DataTables lessonInfo={lessonInfo} />
        </TabPane>
        <TabPane className="tab-pane" tab="满意度反馈" key='2'>
          满意度反馈(待开发)
        </TabPane>
      </Tabs>
    )
  }
}

export default OpTabs