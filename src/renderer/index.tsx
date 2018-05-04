import React from 'react'
import { Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'

import '@/assets/bootstrap-theme-cosmos.css'

const App = () => <Button bsStyle="primary">Hello World</Button>

ReactDOM.render(<App />, document.querySelector('#app'))
