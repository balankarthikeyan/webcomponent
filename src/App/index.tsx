import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './style.css'
import { Hello } from '../components'

import styled from 'styled-components'

const Rendu = styled.h3`
  color: black;
`
class App extends React.Component<any> {
  static defaultProps = {
    className: '',
  }
  render() {
    return (
      <aside className="app">
        <h1>Hello, Welcome!</h1>
        <p>Start editing to see bk magic happen!</p>
        <Rendu>Start editing to see bk magic happen!</Rendu>
        <Hello compiler="TypeScript" framework="React" />,<h2>{'⏳'}</h2>
      </aside>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
