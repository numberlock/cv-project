import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Summary from './components/Summary';
import WorkExperiance from './components/WorkExperiance';
import Output from './components/Output';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GeneralInfo: { name: '', phone: '', email: '', address: '' },
      Summary: { text: '' },
      Education: {
        school: '',
        location: '',
        to: '',
        from: '',
        degree: '',
        achivements: '',
      },
      WorkExperiance: {
        company: '',
        location: '',
        to: '',
        from: '',
        role: '',
        desc: '',
      },

      outputRender: false,
    };

    this.handleLiftChange = this.handleLiftChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    if (this.state.outputRender) {
      this.setState({ outputRender: false });
      event.target.textContent = 'CREATE';
    } else {
      this.setState({
        outputRender: true,
      });
      event.target.textContent = 'EDIT';
    }
  }

  handleLiftChange(name, value) {
    let [group, variable] = name.split(' ');
    this.setState((prevState) => ({
      [group]: { ...prevState[group], [variable]: value },
    }));
  }
  render() {
    return (
      <div className="app-container">
        <nav>
          <div>CV BUILDER</div>
          <button onClick={this.handleButtonClick}>CREATE</button>
        </nav>
        {this.state.outputRender ? (
          <Output app={this.state} />
        ) : (
          <div className="app-inputs">
            <GeneralInfo lift={this.handleLiftChange} app={this.state} />
            <Summary lift={this.handleLiftChange} app={this.state} />
            <Education lift={this.handleLiftChange} app={this.state} />
            <WorkExperiance lift={this.handleLiftChange} app={this.state} />
          </div>
        )}
      </div>
    );
  }
}
