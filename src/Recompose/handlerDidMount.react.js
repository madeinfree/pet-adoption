import { h, Component } from 'preact'

const handlerDidMount = (
  handler
) => WrapperComponent => {
  return class HandlerDidMount extends Component {
    constructor() {
      super();
    }
    componentDidMount() {
      handler(this.props)
    }
    render() {
      return (
        <WrapperComponent
          { ...this.props }
        />
      )
    }
  }
}

export default handlerDidMount
