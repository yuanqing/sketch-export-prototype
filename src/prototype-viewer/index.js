import React from 'react'
import { render } from 'react-dom'

import App from './components/app'
import './index.scss'

render(
  <App {...window.__SKETCH_PROTOTYPE_DATA__} />,
  document.querySelector('.root')
)
