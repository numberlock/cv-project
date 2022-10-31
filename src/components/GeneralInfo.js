import React, { Component } from 'react';

export default class GeneralInfo extends Component {
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
        <h1>General Info</h1>
        <form>
          <input
            name="GeneralInfo name"
            placeholder="First & Last name"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="GeneralInfo phone"
            placeholder="Phone"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="GeneralInfo email"
            placeholder="Email"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="GeneralInfo address"
            placeholder="Address"
            onChange={this.handleOnChange}
          ></input>
        </form>
      </div>
    );
  }
}
