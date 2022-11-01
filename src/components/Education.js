import React, { Component } from 'react';
import EducationInput from './EducationInput';

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      showComponent: true,
    };
  }

  handleOnChange(event) {
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
        <h1>Education</h1>
        <button onClick={this.handleButtonClick}>REMOVE</button>
        {this.state.showComponent ? (
          <div>
            <EducationInput lift={this.handleOnChange} app={this.props.app} />
          </div>
        ) : null}
      </div>
    );
  }
}
