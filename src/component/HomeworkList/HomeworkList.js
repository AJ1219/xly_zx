import React, { Component } from 'react'
import { Switch, List, Input } from 'antd'
import './HomeworkList.css'
import ImgsList from '../ImgsList/ImgsList'
import CommentsList from '../CommentsList/CommentsList'
import { formatUnixTime4YMDHM } from '../../common/utils'
class HomeworkList extends Component {
  state = {
    commentInp: ''
  }
  handleSwitchExcellentState = (itemInfo) => {
    const targetId = itemInfo.id
    const { homeworkActions } = this.props
    homeworkActions.switchExcellent({ id: targetId })
  }
  handlePublishComment = (inp, itemInfo) => {
    const id = itemInfo.id
    const { homeworkActions } = this.props
    const newCommentItem = {
      commentator:{role: "带课老师", nick: "我"},
      content:inp,
      from:"teacher",
      id:+new Date(),
      nick:"小张老师",
      status:"unrevised",
      time:+new Date(),
    }
    homeworkActions.publishComment({ id, newCommentItem })
    this.setState({commentInp: ''})
  }
  handleCommentInpChange = e => {
    this.setState({commentInp: e.target.value})
  }
  renderHomeworkInfo(itemInfo) {
    const { id, author, classInfo, commentator, description, isExcellent, teacherInfo, time } = itemInfo
    return (
      <div className="homework-info">
        <div>
          <span className="homework-info__item">{`NO.${id}`}</span>
          <span className="homework-info__item">{`作业: ${description}`}</span>
          <span className="homework-info__item">{`${author.nick} mid: ${author.mid}`}</span>
          <span className="homework-info__item">{`${classInfo.name} | ${teacherInfo.nick}`}</span> 
          <span className="homework-info__item">{`点评人: ${commentator}`}</span>
          <span className="homework-info__item">{`提交时间: ${time}`}</span>
          <span className="homework-info__item">佳作&nbsp;<Switch checked={isExcellent} onChange={this.handleSwitchExcellentState.bind(null, itemInfo)} /></span>
        </div>
      </div>
    )
  }
  renderCommentInpBox(item) {
    return (
      <Input.Search
        placeholder="输入要点评的话"
        onSearch={inp => {this.handlePublishComment(inp, item)}}
        enterButton="回复"
        value={this.state.commentInp}
        onChange={this.handleCommentInpChange}
      />
    )
  }
  renderItem = (item) => {
    const { homeworkActions } = this.props
    return (
      <List.Item
        className="homework-item"
        key={item.id}
        extra={<CommentsList comments={item.comments} homeworkActions={homeworkActions} />}>
        <div className="homework-item__photos">
          <ImgsList list={item.photos} />
          {this.renderHomeworkInfo(item)}
          {this.renderCommentInpBox(item)}
        </div>
      </List.Item>
    )
  }
  render() {
    const { 
      entities: {
        authorEntity,
        commentEntity,
        homeworkEntity,
        classEntity,
        teacherEntity
      },
      list
    } = this.props
    const fullList = list.map(id => {
      const item = homeworkEntity[id]
      const photos = item.photos
      const comments = item.comments.map(commentId => commentEntity[commentId])
      const author = authorEntity[item.author]
      const classInfo = classEntity[item.classInfo]
      const teacherInfo = teacherEntity[item.teacherInfo]
      const time = formatUnixTime4YMDHM(item.time)
      return { ...item, photos, comments, author, classInfo, teacherInfo, time }
    })
    return (
      <List 
        className="homework-list"
        pagination={false}
        dataSource={fullList}
        renderItem={this.renderItem}
        itemLayout="vertical"
      />
    )
  }
}

export default HomeworkList