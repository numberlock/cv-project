import React, { Component } from 'react';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.props.lift(event.target.name, event.target.value);
  }

  render() {
    return (
      <div>
        <h1>Summary</h1>
        <form>
          <input
            className="summary-input"
            value={this.props.app.Summary.text}
            name="Summary text"
            placeholder="Write your summary here"
            onChange={this.handleOnChange}
          ></input>
        </form>
      </div>
    );
  }
}
