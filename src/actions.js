/*
 * action types
 */

export const SEND_DATA_TO_PARENT = 'SEND_DATA_TO_PARENT'
export const CHANGE_BACKGROUND_COLOR = 'CHANGE_BACKGROUND_COLOR'

/*
 * action creators
 */

export function sendDataToParent(data) {
  return { type: SEND_DATA_TO_PARENT, data }
}

export function changeBackgroundColor(colorData) {
  return { type: CHANGE_BACKGROUND_COLOR, colorData }
}
