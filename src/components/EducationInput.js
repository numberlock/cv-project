import React, { Component } from 'react';

export default class EducationInput extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.props.lift(event);
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="Education school"
            placeholder="School name"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="Education location"
            placeholder="Location"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="Education from"
            placeholder="From"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="Education to"
            placeholder="To"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="Education degree"
            placeholder="Degree"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="Education achivements"
            placeholder="Achivements"
            onChange={this.handleOnChange}
          ></input>
        </form>
      </div>
    );
  }
}
