const initialState = {
  content: "If you're seeing this, then the notifications are working! :)",
  showNotification: true,
  timeout: 3
}

export const setNotification = (content, timeout) => {
  return async dispatch => {
    dispatch({
      type: "SET_NOTIFICATION",
      data: {
        content,
        timeout
      }
    })
  }
}


export const answer_for_6_18 = (content, timeout) => {
  return async dispatch => {
    dispatch({
      type: "SET_NOTIFICATION",
      data: {
        content,
        timeout
      }
    })
    setTimeout(() => {
      dispatch({
        type: "HIDE_NOTIFICATION"
      })
    }, timeout * 1000)
  }
}

export const showNotification = () => {
  return {
    type: "SHOW_NOTIFICATION"
  }
}

export const hideNotification = () => {
  return {
    type: "HIDE_NOTIFICATION",
  }
}

const notificationReducer = (state = initialState, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case "SET_NOTIFICATION":
      return {
        content: action.data.content,
        showNotification: true,
        timeout: action.data.timeout
      }
    case "HIDE_NOTIFICATION":
      return {
        content: state.content,
        showNotification: false,
        timeout: 0
      }
    default:
      return state
  }

  return state
}

export default notificationReducer
