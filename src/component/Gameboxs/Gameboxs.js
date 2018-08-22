import React, { Component } from "react"
import "./Gameboxs.css"


// const handleStopBubble = e => {
//   e.stopPropagation()
// }

class Gameboxs extends Component {
  render() {
    const {
      positionMap
    } = this.props

    return (
      <div className="game2048__boxs">
        <div className="game2048__boxwrapper">
          {
            positionMap.map((rowData, rowIndex) => (
              <div className="game2048__boxwrapper__row" key={`row_${rowIndex}`} >
                {rowData.map((num, colIndex) => (
                  <div className="game2048__box" key={`row_${rowIndex}-col_${colIndex}`}>{num || ""}</div>
                ))}
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Gameboxs
