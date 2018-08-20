import React from 'react'

class ButtonModern extends React.Component {

  constructor(props) {
    super(props)

  }

  render(){
    return (
      <button type="submit">{this.props.name}</button>
    )
  }
}

export default ButtonModern