import React, { Component } from 'react'
import { Tabs } from 'antd'
import './HomeworkTabs.css'
import HomeworkList from '../HomeworkList/HomeworkList'


const TabPane = Tabs.TabPane;

class HomeworkTabs extends Component {
  render() {
    const { 
      homeworkActions,
      entities,
      listLib: { 
        myNoReview,
        myHisReview,
        allNoReview,
        allHisReview
      }
    } = this.props
    return (
      <Tabs tabBarStyle={{padding: '0 20px'}} defaultActiveKey="1" onChange={null}>
        <TabPane className="tab-pane" tab="我的未完成" key='1'>
          <HomeworkList homeworkActions={homeworkActions} entities={entities} list={myNoReview}/>
        </TabPane>
        <TabPane className="tab-pane" tab="我的已完成" key='2'>
          <HomeworkList homeworkActions={homeworkActions} entities={entities} list={myHisReview}/>
        </TabPane>
        <TabPane className="tab-pane" tab="全部已完成" key='3'>
          <HomeworkList homeworkActions={homeworkActions} entities={entities} list={allHisReview}/>
        </TabPane>
        <TabPane className="tab-pane" tab="全部未完成" key='4'>
          <HomeworkList homeworkActions={homeworkActions} entities={entities} list={allNoReview}/>
        </TabPane>
      </Tabs>
    )
  }
}

export default HomeworkTabs