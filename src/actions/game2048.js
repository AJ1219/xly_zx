import ActionTypes from "../const/ActionTypes"

export default {
  keyboardDown: ({ keyCode }) => ({
    type: ActionTypes.KEYBORD_DOWN,
    keyCode
  }),
  initGame: () => ({
    type: ActionTypes.INIT_GAME
  })
}
