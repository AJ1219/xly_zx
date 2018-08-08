import React, { Component } from 'react'
import { Tabs, Switch } from 'antd'
import './HomeworkList.css'
import ImgsList from '../ImgsList/ImgsList'
import {} from 'lodash'
import { formatUnixTime4YMDHM } from '../../common/utils'
/*
  author:1001
  classInfo:78856
  commentator:"小M老师"
  comments:(3) [4000, 4001, 4002]
  description:"拍摄一组静物"
  id:"754"
  isExcellent:true
  photos:(5) [...]
  status:"unrevised"
  teacherInfo:76544({id: 76544, mid: "98676", nick: "小白老师", realName: "白帆", wxCode: "fgg"})
  time:1533362538734
*/

const TabPane = Tabs.TabPane;

class HomeworkList extends Component {
  renderHomeworkInfo(itemInfo) {
    const { id, author, classInfo, commentator, description, isExcellent, teacherInfo, time } = itemInfo
    return (
      <div>
        <div>
          <span>{`NO.${id}`}</span>
          <span>{`作业: ${description}`}</span>
          <span>{`${author.nick} mid: ${author.mid} ${classInfo.name} | ${teacherInfo.nick} 点评人: ${commentator} 提交时间: ${time}`}</span>
          <span>佳作<Switch checked={isExcellent} onChange={null} /></span>
        </div>
      </div>
    )
  }
  renderCommentsList(comments) {
    return (
      <div className="comment-list">
        {comments.map(comment => {
      // comment: {id: 4000, mid: 1001, nick: "小年糕", content: "这个我不会", time: 1533362538734, from: "author"}
      // 老师的
        // commentator:{role: "点评老师", nick: "小M老师"}
        // content:"光影应该这样"
        // from:"teacher"
        // id:4001
        // nick:"小白老师"
        // reason:"点评太简单"
        // status:"reject"
        // time:1533362538734
          const { id, mid, nick, content, time, from, commentator, reason } = comment
          return (
            <div className={`comment-item ${from === 'author' ? 'back-forbidden' : ''}`}>
              <div>
                { from === 'author' ? <span>{`${nick} mid: ${mid}`}</span> : <span>{`${nick} (${commentator.role} ${commentator.nick}) :`}</span> }
                <span>{`${formatUnixTime4YMDHM(time)}`}</span>
              </div>
              <div>
                { from === 'teacher' ? <span>{`${content}`}</span> : null }
                { from === 'author' ? null : <span>退回</span> }
              </div>
              <div>
                { reason ? <span>{`${reason}`}</span> : null }
              </div>
            </div>
          )
        })}
      </div>
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
    return list.map(id => {
      const item = homeworkEntity[id]
      const photos = item.photos
      const comments = item.comments.map(commentId => commentEntity[commentId])
      const author = authorEntity[item.author]
      const classInfo = classEntity[item.classInfo]
      const teacherInfo = teacherEntity[item.teacherInfo]
      const time = formatUnixTime4YMDHM(item.time)
      const itemFullInfo = { ...item, photos, comments, author, classInfo, teacherInfo, time }
      return (
        <div className="homework-item">
          <div className="homework-item__photos">
            <ImgsList list={photos} />
            {this.renderHomeworkInfo(itemFullInfo)}
            {/*{this.renderCommentInpBox(comments)}*/}
          </div>
          {this.renderCommentsList(comments)}
        </div>
      )
    })
  }
}

export default HomeworkList