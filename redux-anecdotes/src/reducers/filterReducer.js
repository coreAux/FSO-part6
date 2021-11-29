const initialState = ""

export const setFilter = (content) => {
  return {
    type: "FILTER",
    data: {
      content
    }
  }
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      return action.data.content
    default:
      return state
  }

  return state
}

export default filterReducer
