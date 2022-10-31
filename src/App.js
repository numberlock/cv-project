import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Summary from './components/Summary';
import WorkExperiance from './components/WorkExperiance';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GeneralInfo: { name: '', phone: '', email: '', address: '' },
    };

    this.handleLiftChange = this.handleLiftChange.bind(this);
  }

  handleLiftChange(name, value) {
    let [group, variable] = name.split(' ');
    this.setState((prevState) => ({
      [group]: { ...prevState[group], [variable]: value },
    }));
  }
  render() {
    return (
      <div>
        <div>CV BUILDER</div>
        <button>CREATE</button>
        <div>
          <GeneralInfo lift={this.handleLiftChange} />
          <Summary lift={this.handleLiftChange} />
          <Education lift={this.handleLiftChange} />
          <WorkExperiance lift={this.handleLiftChange} />
        </div>
      </div>
    );
  }
}
