import React, { Component } from 'react';

export default class WorkExperianceInput extends Component {
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
            name="WorkExperiance company"
            value={this.props.app.WorkExperiance.company}
            placeholder="Company name"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="WorkExperiance location"
            value={this.props.app.WorkExperiance.location}
            placeholder="Location"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="WorkExperiance from"
            value={this.props.app.WorkExperiance.from}
            placeholder="From"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="WorkExperiance to"
            value={this.props.app.WorkExperiance.to}
            placeholder="To"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="WorkExperiance role"
            value={this.props.app.WorkExperiance.role}
            placeholder="Role"
            onChange={this.handleOnChange}
          ></input>
          <input
            name="WorkExperiance desc"
            value={this.props.app.WorkExperiance.desc}
            placeholder="Job description"
            onChange={this.handleOnChange}
          ></input>
        </form>
      </div>
    );
  }
}
