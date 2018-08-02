import React, { Component } from 'react'
import { Table } from 'antd'
import Styles from './SatisfiedTable.css'

class SatisfiedTable extends Component { 
  handleReply = () => {

  }
  render() {
    const { list } = this.props
    
    const columns = [{
      title: '课程',
      dataIndex: 'class_info.name',
      align: 'center',
    }, {
      title: '教程',
      dataIndex: 'course_name',
      align: 'center',
    }, {
      title: '开课时间',
      dataIndex: 'time',
      align: 'center',
    }, {
      title: '老师',
      dataIndex: 'teacher_info.nick',
      align: 'center',
    }, {
      title: '满意度评分',
      dataIndex: 'satisfied_score',
      align: 'center',
    }, {
      title: '具体反馈',
      dataIndex: 'satisfied_detail',
      align: 'center',
    }, {
      title: '操作',
      dataIndex: 'reply_status',
      align: 'center',
      render: info => {
        return <span onClick={this.handleReply}>{info === 1 ? '已回复' : '✉️回复'}</span>
      }
    }];
    return (
      <div className="table-wrapper">
        <Table 
          rowKey={record => record.class_info.id} 
          dataSource={list} 
          columns={columns} 
          pagination={false}
          bordered
        />
      </div>
    )
  }
}

export default SatisfiedTable