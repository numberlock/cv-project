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
            value={this.props.app.Education.school}
            placeholder="School name"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="Education location"
            value={this.props.app.Education.location}
            placeholder="Location"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="Education from"
            value={this.props.app.Education.from}
            placeholder="From"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="Education to"
            value={this.props.app.Education.to}
            placeholder="To"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="Education degree"
            value={this.props.app.Education.degree}
            placeholder="Degree"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="Education achivements"
            value={this.props.app.Education.achivements}
            placeholder="Achivements"
            onChange={this.handleOnChange}
          ></input>
        </form>
      </div>
    );
  }
}
