import React, { Component } from "react"
import { Carousel } from "antd"
import "./ImgsList.css"

class ImgsList extends Component {
  render() {
    const {
      list
    } = this.props
    return (
      <div className="imgslist-wrapper">
        <Carousel effect="fade" autoplay>
          { list.map((src, index) => <div key={index}><img alt="student-homework" className="imgList__photo" src={src} /></div>) }
        </Carousel>
      </div>
    )
  }
}

export default ImgsList
