import * as React from "react";
import * as ReactDOM from "react-dom";
import './style.css'
import { Hello } from '../components/hello'


class App extends React.Component {
    static defaultProps = {
      className: '',
    }
    render() {
      return (
        <aside className="app">
          <h1>Hello, Welcome!</h1>
          <p>Start editing to see some magic happen!</p>
          <Hello compiler="TypeScript" framework="React" />,
          <h2>{'⏳'}</h2>
        </aside>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))


