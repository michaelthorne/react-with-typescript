import * as React from 'react'

interface Props {
  count?: number
}

class Count extends React.Component<Props> {
  /**
   * defaultProps can be defined as a property on the component class itself, to set the default props for the class.
   * This is used for undefined props, but not for null props.
   * https://reactjs.org/docs/react-component.html#defaultprops
   */
  static defaultProps: Props = {
    count: 10
  }

  render () {
    return <h1>{this.props.count}</h1>
  }
}

export default Count