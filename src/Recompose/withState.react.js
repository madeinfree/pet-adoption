import { h, Component } from 'preact'

const withState = (
  stateName,
  stateUpdateName,
  initialState
) => WrapperComponent => {
  return class withState extends Component {
    constructor() {
      super();
      this.state = {
        stateValue: initialState
      }
    }

    _updateStateValue(updateFn, callback) {
      this.setState(state => {
        return {
          stateValue: updateFn(state)
        }
      }, callback)
    }

    render() {
      const stateIntoProps = {
        [stateName]: this.state.stateValue,
        [stateUpdateName]: this._updateStateValue.bind(this)
      }
      return (
        <WrapperComponent
          { ...this.props }
          { ...stateIntoProps }
        />
      )
    }
  }
}

export default withState
