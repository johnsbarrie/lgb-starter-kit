import React from 'react'
import { connect } from 'react-redux'
import logo from '../../../assets/images/logo.svg'
import './loader.css'

const Loader = props => {
  return (
    props.loading && (
      <div className="loader">
        <img src={logo} className="App-logo" alt="logo" />
        loader
      </div>
    )
  )
}

const mapStateToProps = state => ({ ...state.app })

export default connect(mapStateToProps)(Loader)
