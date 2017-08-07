import { h, render, Component } from 'preact'

import Content from './Content/content.react'
import Navigation from './Navigation/navigation.react'

class Root extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Content />
      </div>
    )
  }
}

render(<Root />, document.getElementById('view'))
