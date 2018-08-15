import React, { Component } from "react"
import { Tabs, Badge } from "antd"
import "./HomeworkTabs.css"
import HomeworkList from "../HomeworkList/HomeworkList"

const handleSearchArrById = (arr, item) => {
  if (item === "" || typeof item === "undefined") return arr
  return arr.filter(arrItem => arrItem === item)
}
class HomeworkTabs extends Component {
  onTabChange = activeKey => {
    const {
      homeworkActions
    } = this.props
    homeworkActions.switchCurrentTab(activeKey)
  }
  render() {
    const {
      homeworkActions,
      entities,
      listLib: {
        myNoReview,
        myHisReview,
        allNoReview,
        allHisReview,
        filterOption: {
          value: filterValue
        }
      }
    } = this.props

    const myNoReviewFinal = handleSearchArrById(myNoReview, filterValue)
    const myHisReviewFinal = handleSearchArrById(myHisReview, filterValue)
    const allHisReviewFinal = handleSearchArrById(allHisReview, filterValue)
    const allNoReviewFinal = handleSearchArrById(allNoReview, filterValue)


    return (
      <Tabs tabBarStyle={{ padding: "0 20px" }} defaultActiveKey="1" onChange={this.onTabChange}>
        <Tabs.TabPane className="tab-pane" tab={<span>我的未完成 <Badge count={myNoReviewFinal.length} /></span>} key="myNoReview">
          <HomeworkList homeworkActions={homeworkActions} entities={entities} list={myNoReviewFinal} />
        </Tabs.TabPane>
        <Tabs.TabPane className="tab-pane" tab="我的已完成" key="myHisReview">
          <HomeworkList homeworkActions={homeworkActions} entities={entities} list={myHisReviewFinal} />
        </Tabs.TabPane>
        <Tabs.TabPane className="tab-pane" tab="全部已完成" key="allHisReview">
          <HomeworkList homeworkActions={homeworkActions} entities={entities} list={allHisReviewFinal} />
        </Tabs.TabPane>
        <Tabs.TabPane className="tab-pane" tab={<span>全部未完成 <Badge count={allNoReviewFinal.length} /></span>} key="allNoReview">
          <HomeworkList homeworkActions={homeworkActions} entities={entities} list={allNoReviewFinal} />
        </Tabs.TabPane>
      </Tabs>
    )
  }
}

export default HomeworkTabs
