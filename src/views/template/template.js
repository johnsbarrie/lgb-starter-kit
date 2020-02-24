import React from 'react'
import { connect } from 'react-redux'
import { loadItem } from '../../actions'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const button = path => {
  return (
    path && (
      <Link to={path}>
        <button type="button">Go to Users</button>
      </Link>
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
      {button(props.navigateTo)}
    </div>
  )
}

Template.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
}

export default connect(null, { loadItem })(Template)
