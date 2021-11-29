import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { upvote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes
    .filter((a) => a.content.toLowerCase().includes(state.filter.toLowerCase()))
    .sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(upvote(anecdote.id))
    dispatch(setNotification(`You upvoted "${anecdote.content}"! <3`, 1))
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList
