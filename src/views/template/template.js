import React from 'react'
import { connect } from 'react-redux'
import { loadItem } from '../../actions'

const button = onClick => {
  return (
    onClick && (
      <button type="button" onClick={onClick}>
        Go to Users
      </button>
    )
  )
}

const Template = props => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{props.title}</h1>
      </header>
      <div>{props.text}</div>
      {button(props.onClick)}
    </div>
  )
}

export default connect(null, { loadItem })(Template)
