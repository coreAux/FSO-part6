import React, { useEffect } from 'react'

import { useDispatch } from "react-redux"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"

import Notification from "./components/Notification"
import Filter from "./components/Filter"
import AnecdoteList from "./components/AnecdoteList"
import AnecdoteForm from "./components/AnecdoteForm"

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
