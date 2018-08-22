import { combineReducers } from "redux"
import ActionTypes from "../const/ActionTypes"
import Game2048Config from "../const/Game2048Config"

// Game2048Config.NEW_CREATE_NUM_OPTIONS
const randomNumFromArr = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

const createNew = currentMap => {
  const map = [...currentMap]
  const num = randomNumFromArr(Game2048Config.NEW_CREATE_NUM_OPTIONS)
  const row = randomNumFromArr(Game2048Config.NEW_CREATE_ROW_OPTIONS)
  const col = randomNumFromArr(Game2048Config.NEW_CREATE_COL_OPTIONS)
  if (map[row][col] === 0) {
    map[row][col] = num
  } else if (map.some(rowData => rowData.some(num => num === 0))) {
    createNew(currentMap)
  } else {
    alert("GAMEOVER")
  }
  return map
}

const moveOtherSide = (arr, direction) => {
  const realEleArr = arr.filter(item => item !== 0)
  let res = []
  const zeroArr = [...new Array(arr.length - realEleArr.length)].map(() => 0)
  console.log(zeroArr)
  switch (direction) {
    case "left":
      res = realEleArr.concat(zeroArr)
      break
    case "right":
      res = zeroArr.concat(realEleArr)
      break
    default:
      break
  }
  return res
}
const rotateArr2D = arr => {
  const rotatedArr = []
  for (let i = 0; i < arr[0].length; i++) {
    rotatedArr.push(arr.map(rowArr => rowArr[i]))
  }
  return rotatedArr
}
const moveOtherSide2D = (arr, direction) => {
  let res
  switch (direction) {
    case "left":
      res = arr.map(rowData => moveOtherSide(rowData, "left"))
      break
    case "right":
      res = arr.map(rowData => moveOtherSide(rowData, "right"))
      break
    case "top":
      res = rotateArr2D(rotateArr2D(arr).map(rowData => moveOtherSide(rowData, "left")))
      break
    case "bottom":
      res = rotateArr2D(rotateArr2D(arr).map(rowData => moveOtherSide(rowData, "right")))
      break
    default:
      break
  }
  return res
}

const getMapAfterKeyDown = (map, keyCode) => {
  const lastMap = [...map]
  let currentMap = [...map]
  const isFull = map.every(rowData => rowData.every(num => num !== 0))
  switch (keyCode) {
    case 38:
      // 上
      currentMap = moveOtherSide2D(currentMap, "top")
      currentMap.forEach((rowData, rowIndex) => {
        rowData.forEach((currentNum, colIndex) => {
          if (currentNum !== 0) {
            if ((rowIndex - 1 >= 0) && currentMap[rowIndex - 1][colIndex] === currentNum) {
              currentMap[rowIndex - 1][colIndex] = currentNum * 2
              currentMap[rowIndex][colIndex] = 0

              if (rowIndex + 1 <= 3) {
                currentMap[rowIndex][colIndex] = currentMap[rowIndex + 1][colIndex]
                currentMap[rowIndex + 1][colIndex] = 0
              }
              if (rowIndex + 2 <= 3) {
                currentMap[rowIndex + 1][colIndex] = currentMap[rowIndex + 2][colIndex]
                currentMap[rowIndex + 2][colIndex] = 0
              }
            }
          }
        })
      })
      currentMap = moveOtherSide2D(currentMap, "top")
      break
    case 40:
      // 下
      currentMap = moveOtherSide2D(currentMap, "bottom")
      currentMap.forEach((rowData, rowIndex) => {
        rowData.forEach((currentNum, colIndex) => {
          if (currentNum !== 0) {
            if ((rowIndex - 1 >= 0) && currentMap[rowIndex - 1][colIndex] === currentNum) {
              currentMap[rowIndex - 1][colIndex] = currentNum * 2
              currentMap[rowIndex][colIndex] = 0

              if (rowIndex + 1 <= 3) {
                currentMap[rowIndex][colIndex] = currentMap[rowIndex + 1][colIndex]
                currentMap[rowIndex + 1][colIndex] = 0
              }
              if (rowIndex + 2 <= 3) {
                currentMap[rowIndex + 1][colIndex] = currentMap[rowIndex + 2][colIndex]
                currentMap[rowIndex + 2][colIndex] = 0
              }
            }
          }
        })
      })
      currentMap = moveOtherSide2D(currentMap, "bottom")
      break

    case 37:
      // 左
      currentMap = moveOtherSide2D(currentMap, "left")
      currentMap.forEach((rowData, rowIndex) => {
        rowData.forEach((currentNum, colIndex) => {
          if (currentNum !== 0) {
            if ((colIndex - 1 >= 0) && currentMap[rowIndex][colIndex - 1] === currentNum) {
              currentMap[rowIndex][colIndex - 1] = currentNum * 2
              currentMap[rowIndex][colIndex] = 0

              if (colIndex + 1 <= 3) {
                currentMap[rowIndex][colIndex] = currentMap[rowIndex][colIndex + 1]
                currentMap[rowIndex][colIndex + 1] = 0
              }
              if (colIndex + 2 <= 3) {
                currentMap[rowIndex][colIndex + 1] = currentMap[rowIndex][colIndex + 2]
                currentMap[rowIndex][colIndex + 2] = 0
              }
            }
          }
        })
      })
      currentMap = moveOtherSide2D(currentMap, "left")
      break

    case 39:
      // 右
      currentMap = moveOtherSide2D(currentMap, "right")
      currentMap.forEach((rowData, rowIndex) => {
        rowData.forEach((currentNum, colIndex) => {
          if (currentNum !== 0) {
            if ((colIndex - 1 >= 0) && currentMap[rowIndex][colIndex - 1] === currentNum) {
              currentMap[rowIndex][colIndex - 1] = currentNum * 2
              currentMap[rowIndex][colIndex] = 0

              if (colIndex + 1 <= 3) {
                currentMap[rowIndex][colIndex] = currentMap[rowIndex][colIndex + 1]
                currentMap[rowIndex][colIndex + 1] = 0
              }
              if (colIndex + 2 <= 3) {
                currentMap[rowIndex][colIndex + 1] = currentMap[rowIndex][colIndex + 2]
                currentMap[rowIndex][colIndex + 2] = 0
              }
            }
          }
        })
      })
      currentMap = moveOtherSide2D(currentMap, "right")
      break

    default:
      break
  }
  const needNew = JSON.stringify(lastMap) !== JSON.stringify(currentMap)
  return (needNew || isFull) ? createNew(currentMap) : currentMap
}

function positionMap(state = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
], action) {
  switch (action.type) {
    case ActionTypes.INIT_GAME: {
      return createNew(createNew(state))
    }
    case ActionTypes.KEYBORD_DOWN:
      return getMapAfterKeyDown(state, action.keyCode)
    default:
      return state
  }
}

const game2048 = combineReducers({
  positionMap
})
export default game2048
