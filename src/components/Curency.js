import React from 'react'
import ReactDOM, { render } from 'react-dom'

class Curency extends React.Component {
    constructor(props) {
     super(props);
}

render() {
    return (
      <>
        <p>{this.props.curencyName.toUpperCase()}</p>
        <input
          type="text"
          value={this.props.curencyValue}
          onChange={(event) => {
            this.props.changeCurency(
              event.target.value,
              this.props.curencyName
            );
          }}
        />
      </>
    );
  }
}
export default Curency;