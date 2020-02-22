import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Template from '../template/template'
import { loadItem } from '../../actions'

const pageId = 'users'

const UsersBinding = props => {
  useEffect(() => {
    props.loadItem(pageId)
  })

  return <Template title={props.title} text={props.text} />
}

const mapStateToProps = state => {
  return {
    ...state.pages[pageId],
  }
}

export default connect(mapStateToProps, { loadItem })(UsersBinding)
