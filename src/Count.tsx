import * as React from 'react'

// Define the object structure of our expected props inline

/*const Count: React.FunctionComponent<{
  count: number;
}> = (props) => {
  return <h1>{props.count}</h1>
}*/

interface Props {
  count?: number
}

export default class Count extends React.Component<Props> {
  render () {
    return <h1>{this.props.count}</h1>
  }
}