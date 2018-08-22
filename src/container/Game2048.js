import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
// import { bindActionCreators } from "redux"
import GameBoxs from "../component/Gameboxs/Gameboxs"
import actions from "../actions/game2048"

class Game2048 extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.initGame()
    document.addEventListener("keydown", ({ keyCode }) => {
      switch (keyCode) {
        case 38:
        case 40:
        case 37:
        case 39:
          actions.keyboardDown({ keyCode })
          break
        default:
          break
      }
    })
  }
  componentWillUnmount() {
    document.removeEventListener("keydown")
  }
  render() {
    const { positionMap } = this.props
    return (
      <GameBoxs positionMap={positionMap} />
    )
  }
}

const mapStateToProps = ({
  game2048: { positionMap }
}) => ({ positionMap })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Game2048)
