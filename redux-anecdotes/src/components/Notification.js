import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { showNotification, hideNotification } from "../reducers/notificationReducer"

const Notification = ( props ) => {

  useEffect(() => {
    if (props.notification.showNotification) {
      const timer = setTimeout(() => {
        props.hideNotification()
      }, props.notification.timeout * 1000)

      return () => clearTimeout(timer)
    }
  }, [props.notification])

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    display: props.notification.showNotification ? "block" : "none",
  }
  return (
    <div style={style}>
      {props.notification.content}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const mapDispatchToProps = {
  hideNotification
}

const ConnectedNotification = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)

export default ConnectedNotification
