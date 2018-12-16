import { combineReducers } from 'redux'
import {
  SEND_DATA_TO_PARENT,
  CHANGE_BACKGROUND_COLOR,
} from './actions'

function setDataFromChild(state = [], action) {
  switch (action.type) {
    case SEND_DATA_TO_PARENT:
      return [
        ...state,
        {
          dataFromChild: action.data
        }
      ]
    case CHANGE_BACKGROUND_COLOR:
      return [
        ...state,
        {
          color: action.colorData
        }
      ]
    default:
      return state
  }
}

const dataPassApp = combineReducers({
  setDataFromChild
})

export default dataPassApp
