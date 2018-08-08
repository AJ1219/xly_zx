import React, { Component } from 'react'
import './ImgsList.css'

class ImgsList extends Component {
  render() {
    const { 
      list
    } = this.props
    return (
      <div className="imgList__photos">
        { 
          list.map(src => 
            <img className="imgList__photo" src={src} />)
        }
      </div>
    )
  }
}

export default ImgsList