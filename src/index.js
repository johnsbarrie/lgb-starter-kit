import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

require(`./assets/styles/${process.env.TARGET}.scss`)
require(`./assets/styles/${process.env.TARGET}.css`)

ReactDOM.render(React.createElement(App), document.getElementById('root'))
