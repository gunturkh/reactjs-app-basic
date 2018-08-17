import React from 'react'
import './index.css'

class InputText extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {/* <ButtonModern type="success">Modern</ButtonModern> */}
        {/* <Button color="success">Bootstrap</Button> */}
        <p>Text: {this.state.text}</p>
      </div>
    )
  }
}

export default InputText
