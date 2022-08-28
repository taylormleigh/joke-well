import React from "react"

class Punchline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      punchlineIsHidden: true,
      punchline: this.props.punchline
    }
  }

  TogglePunchline = () => {
    this.setState({
      punchlineIsHidden: !this.state.punchlineIsHidden
    });
  }

  render() {
    return (
      <>
        <button className={`toggle-punchline ${this.state.punchlineIsHidden ? "hide" : "show"}`} onClick={this.TogglePunchline}>
            {this.state.punchlineIsHidden ? "Show Punchline" : "Hide Punchline"}
        </button>
        <div className={`joke-punchline ${this.state.punchlineIsHidden ? "hide" : "show"}`}>
            {this.state.punchline}
        </div>
      </>
    )
  }
}

export default Punchline