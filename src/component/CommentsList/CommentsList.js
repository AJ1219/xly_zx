import React, { Component } from 'react'
import './CommentsList.css'
import { formatUnixTime4YMDHM } from '../../common/utils'
import { Button, List } from 'antd'

const CommentHeader = ({ from, mid, nick, formatedTime, commentator }) => {
  return (
    <div className="comment-header">
      { ( from === 'author' ) ? <span>{`${nick} mid: ${mid}`}</span> : <span>{`${nick} (${commentator.role} ${commentator.nick}) :`}</span> }
      <span className="comment-header__time">{`${formatedTime}`}</span>
    </div>
  )
}
const CommentContent = ({ onReturnBackBtnClick, id, from, content, status }) => {
  return (
    <div className="comment-content">
      <span>{`${content}`}</span>
      { (from === 'teacher' && status === 'unrevised') ? <Button size="small" type="danger" className="comment-content__back" onClick={onReturnBackBtnClick}>退回</Button> : null }
    </div>
  )
}
const CommentFooter = ({ reason }) => {
  return (
    <div className="comment-footer">
      {reason ? <span className="redColor">{`(消息被退回, 退回原因: ${reason})`}</span> : null}
    </div>
  )
}
class CommentsList extends Component {
  onReturnBackBtnClick = (comment) => {
    const { homeworkActions } = this.props
    homeworkActions.returnBackComment({ commentId: comment.id })
  }
  renderItem = (comment) => {
    const { time } = comment
    const formatedTime = formatUnixTime4YMDHM(time)
    const props = { ...comment, formatedTime }
    return (
      <List.Item
        className="comment-item"
        key={comment.id}
      >
        <CommentHeader { ...props } />
        <CommentContent { ...props } onReturnBackBtnClick={this.onReturnBackBtnClick.bind(null, comment)}/>
        <CommentFooter { ...props } />
      </List.Item>
    )
  }
  render() {
    const { 
      comments
    } = this.props
    return (
      <List 
        className="comment-list"
        pagination={false}
        dataSource={comments}
        renderItem={this.renderItem}
        itemLayout="vertical"
      />
    )
  }
}

export default CommentsList