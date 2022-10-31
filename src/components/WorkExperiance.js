import React, { Component } from 'react';
import WorkExperianceInput from './WorkExperianceInput';
export default class WorkExperiance extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      showComponent: false,
    };
  }

  handleOnChange(event) {
    console.log(event);
    this.props.lift(event.target.name, event.target.value);
  }

  handleButtonClick(event) {
    if (this.state.showComponent) {
      this.setState({ showComponent: false });
      event.target.textContent = 'ADD';
    } else {
      this.setState({ showComponent: true });
      event.target.textContent = 'REMOVE';
    }
  }

  render() {
    return (
      <div>
        <div></div>
        <h1>Work Experiance</h1>
        <button onClick={this.handleButtonClick}>ADD</button>
        {this.state.showComponent ? (
          <div>
            <WorkExperianceInput lift={this.handleOnChange} />
          </div>
        ) : null}
      </div>
    );
  }
}
