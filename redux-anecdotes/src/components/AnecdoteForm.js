import React from "react"
import { connect } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import {┬ásetNotification } from "../reducers/notificationReducer"

const AnecdoteForm = ( props ) => {
  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ""
    props.createAnecdote(content)
    props.setNotification(`Anecdote "${content}" created`, 10)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
