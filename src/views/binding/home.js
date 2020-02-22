import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Template from '../template/template'
import { loadItem } from '../../actions'
import { useHistory } from 'react-router-dom'

const pageId = 'home'
const HomeBinding = props => {
  let history = useHistory()
  const onClick = () => {
    history.push('/users')
  }

  useEffect(() => {
    props.loadItem(pageId)
  })
  return <Template title={props.title} text={props.text} onClick={onClick} />
}

const mapStateToProps = state => {
  return {
    ...state.pages[pageId],
  }
}

export default connect(mapStateToProps, { loadItem })(HomeBinding)
