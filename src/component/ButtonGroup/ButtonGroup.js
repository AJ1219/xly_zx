import React, { Component } from 'react'
import { Button } from 'antd'
import './ButtonGroup.css'

class ButtonGroup extends Component {
  render() {
    const { customButtons } = this.props
    return (
      <div className="filter-buttons">
        <Button className="filter-button">汇总</Button>
        { customButtons.map((buttonName, index) => (
          <Button className="filter-button" key={index}>{buttonName}</Button>
        )) }
        <Button className="return-btn">返回</Button>
      </div>
    )
  }
}

export default ButtonGroup