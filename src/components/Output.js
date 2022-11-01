import React, { Component } from 'react';

export default class Output extends Component {
  render() {
    return (
      <div className="output-container">
        <div className="output-basic-info">
          <div>{this.props.app.GeneralInfo.name}</div>
          <div className="basic-info-right">
            <div>{this.props.app.GeneralInfo.phone} 📞</div>
            <div>{this.props.app.GeneralInfo.email} ✉️</div>
            <div>{this.props.app.GeneralInfo.address} 🏠</div>
          </div>
        </div>
        <div className="output-other-info">
          <div className="output-about">
            <div>
              📄 About Me
              <hr></hr>
            </div>
            <div>{this.props.app.Summary.text}</div>
          </div>
          <div>
            🎓 Education <hr></hr>
          </div>
          <div className="output-edu-work-container">
            <div>{this.props.app.Education.school}</div>
            <div>{this.props.app.Education.location}</div>
            <div>{this.props.app.Education.to}</div>
            <div>{this.props.app.Education.from}</div>
            <div>{this.props.app.Education.degree}</div>
            <div>{this.props.app.Education.achivements}</div>
          </div>
          <div>
            💼 Experiance <hr></hr>
          </div>
          <div className="output-edu-work-container">
            <div>{this.props.app.WorkExperiance.company}</div>
            <div>{this.props.app.WorkExperiance.location}</div>
            <div>{this.props.app.WorkExperiance.from}</div>
            <div>{this.props.app.WorkExperiance.to}</div>
            <div>{this.props.app.WorkExperiance.role}</div>
            <div>{this.props.app.WorkExperiance.desc}</div>
          </div>
        </div>
      </div>
    );
  }
}
