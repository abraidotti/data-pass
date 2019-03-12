import { combineReducers } from 'redux'
import {
  SEND_DATA_TO_PARENT,
  CHANGE_BACKGROUND_COLOR,
} from './actions'

function setDataFromChild(state = [], action) {
  switch (action.type) {
    case SEND_DATA_TO_PARENT:
      console.log("switching to SEND_DATA_TO_PARENT in reducer")
      return [
        ...state,
        {
          dataFromChild: action.dataObjectFromChild
        }
      ]
    case CHANGE_BACKGROUND_COLOR:
      return [
        ...state,
        {
          color: action.colorDataObjectFromChild
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
