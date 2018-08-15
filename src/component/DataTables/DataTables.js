import React, { Component } from "react"
import { Table, Icon, Popover } from "antd"
import { browserHistory } from "react-router"
import "./DataTables.css"


const handleStopBubble = e => {
  e.stopPropagation()
}
const renderPopoverContent = record => (
  <div>
    { Object.keys(record.teacherInfo).map(key => (
      <span key={key} className="marginRight20">{`${key}: ${record.teacherInfo[key]}`}</span>
      )) }
  </div>
)

const renderRate = (info, type) => {
  let className
  let rate
  switch (type) {
    case "normal": {
      const [times, total] = info.split("/")
      rate = times / total
      if (rate > 0.95) {
        className = "good-rate"
      } else if (rate < 0.8) {
        className = "bad-rate"
      } else {
        className = "common-rate"
      }
      return <span className={className}>{`${times}/${total}`}</span>
    }
    case "percent": {
      rate = info
      const percentNum = Math.floor(info * 10000) / 100
      if (rate > 0.95) {
        className = "good-rate"
      } else if (rate < 0.8) {
        className = "bad-rate"
      } else {
        className = "common-rate"
      }
      return <span className={className}>{`${percentNum}%`}</span>
    }
    default: {
      return <span>{info}</span>
    }
  }
}
const columns = [
  {
    title: "班级",
    dataIndex: "classInfo.name"
  }, {
    title: "课程状态",
    dataIndex: "status",
    render: text => (
      <span>{text === 1 ? "进行中" : "已结束"}</span>
    )
  }, {
    title: "开课时间",
    dataIndex: "startTime"
  }, {
    title: "老师",
    dataIndex: "teacherInfo.nick",
    render: (text, record) => (
      <span>
        <Popover title="老师信息" content={renderPopoverContent(record)} trigger="click" onClick={handleStopBubble}>
          <Icon type="profile" />
        </Popover>&nbsp;{text}
      </span>
    )
  }, {
    title: "上课率",
    dataIndex: "enterRate",
    render: info => renderRate(info, "normal")
  }, {
    title: "作业提交率",
    dataIndex: "homeworkSubmitRate",
    render: info => renderRate(info, "percent")
  }, {
    title: "被点评情况",
    dataIndex: "beCommenttedRate",
    render: info => renderRate(info, "percent")
  }, {
    title: "打卡率",
    dataIndex: "signRate",
    render: info => renderRate(info, "normal")
  }, {
    title: "满意度",
    dataIndex: "satisfyRate",
    render: info => renderRate(info, "percent")
  }
]
class DataTables extends Component {
  onRow = record => ({
    onClick: () => {
      browserHistory.push(`/classDetail/${record.classInfo.id}`)
    }
  })

  render() {
    const {
      entities,
      lessonInfo: {
        currentLessonsList: currentLessonsIdxs,
        historyLessonsList: historyLessonsIdxs
      }
    } = this.props

    const currentLessonsList = (currentLessonsIdxs || []).map(id => {
      const classInfo = entities.classItemEntity[id]
      return {
        ...classInfo,
        classInfo: entities.classEntity[classInfo.classInfo],
        teacherInfo: entities.teacherEntity[classInfo.teacherInfo]
      }
    })
    const historyLessonsList = (historyLessonsIdxs || []).map(id => {
      const classInfo = entities.classItemEntity[id]
      return {
        ...classInfo,
        classInfo: entities.classEntity[classInfo.classInfo],
        teacherInfo: entities.teacherEntity[classInfo.teacherInfo]
      }
    })

    return (
      <div className="table-group">
        <div className="table-item">
          <div className="table-item__title">在学课程</div>
          <Table
            onRow={this.onRow}
            rowKey={record => record.classInfo.id}
            dataSource={currentLessonsList}
            columns={columns}
            pagination={false}
            bordered
          />
        </div>
        <div className="table-item">
          <div className="table-item__title">历史数据</div>
          <Table
            onRow={this.onRow}
            rowKey={record => record.classInfo.id}
            dataSource={historyLessonsList}
            columns={columns}
            pagination={false}
            bordered
          />
        </div>
      </div>
    )
  }
}

export default DataTables
