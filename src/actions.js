/*
 * action types
 */

export const SEND_DATA_TO_PARENT = 'SEND_DATA_TO_PARENT'
export const CHANGE_BACKGROUND_COLOR = 'CHANGE_BACKGROUND_COLOR'

/*
 * action creators
 */

export function sendDataToParent(dataObjectFromChild) {
  console.log("data object from child in actions.js " + dataObjectFromChild)
  return { type: SEND_DATA_TO_PARENT, dataObjectFromChild }
}

export function changeBackgroundColor(colorDataObjectFromChild) {
  return { type: CHANGE_BACKGROUND_COLOR, colorDataObjectFromChild }
}
