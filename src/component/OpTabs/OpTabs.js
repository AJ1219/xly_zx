import React, { Component } from 'react'
import { Tabs } from 'antd'
import './OpTabs.css'
import ButtonGroup from '../../component/ButtonGroup/ButtonGroup'
import DataTables from '../../component/DataTables/DataTables'
import SatisfiedTable from '../SatisfiedTable/SatisfiedTable'

const TabPane = Tabs.TabPane;

class OpTabs extends Component {
  render() {
    const { 
      lessonInfo,
      userInfo: {
        learningLesson
      },
      satisfiedInfo
    } = this.props
    return (
      <Tabs tabBarStyle={{padding: '0 20px'}} defaultActiveKey="1" onChange={null}>
        <TabPane className="tab-pane" tab="课程信息" key='1'>
          <ButtonGroup customButtons={learningLesson}/>
          <DataTables lessonInfo={lessonInfo} />
        </TabPane>
        <TabPane className="tab-pane" tab="满意度反馈" key='2'>
          <ButtonGroup customButtons={learningLesson}/>
          <SatisfiedTable list={satisfiedInfo} />
        </TabPane>
      </Tabs>
    )
  }
}

export default OpTabs