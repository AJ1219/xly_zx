import React, { Component } from "react"
import { Tabs } from "antd"
import "./OpTabs.css"
import ButtonGroup from "../../component/ButtonGroup/ButtonGroup"
import DataTables from "../../component/DataTables/DataTables"
import SatisfiedTable from "../SatisfiedTable/SatisfiedTable"

class OpTabs extends Component {
  render() {
    const {
      entities,
      userInfo,
      currentLessonsList,
      historyLessonsList,
      userInfo: {
        learningLesson
      },
      satisfiedInfo,
      lessonActions
    } = this.props
    return (
      <Tabs tabBarStyle={{ padding: "0 20px" }} defaultActiveKey="1" onChange={null}>
        <Tabs.TabPane className="tab-pane" tab="课程信息" key="1">
          <ButtonGroup customButtons={learningLesson} />
          <DataTables entities={entities} lessonInfo={{ currentLessonsList, historyLessonsList }} />
        </Tabs.TabPane>
        <Tabs.TabPane className="tab-pane" tab="满意度反馈" key="2">
          <ButtonGroup customButtons={learningLesson} />
          <SatisfiedTable entities={entities} list={satisfiedInfo} lessonActions={lessonActions} userInfo={userInfo} />
        </Tabs.TabPane>
      </Tabs>
    )
  }
}

export default OpTabs
