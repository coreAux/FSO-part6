import anecdoteService from "../services/anecdotes"

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote
    })
  }
}

export const upvote = (id) => {
  return async dispatch => {
    const upvotedAnecdote = await anecdoteService.upvote(id)
    dispatch({
      type: "UPVOTE",
      data: upvotedAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes
    })
  }
}

const reducer = (state = [], action) => {

  switch (action.type) {
    case "INIT_ANECDOTES":
      return action.data
    case "NEW_ANECDOTE":
      return [...state, action.data]
    case "UPVOTE":

      return state.map((anecdote) => anecdote.id !== action.data.id ? anecdote : action.data)
    default:
      return state
  }

  return state
}

export default reducer
