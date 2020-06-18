import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return(
        <div>
            <p>{this.props.startYear} - {this.props.endYear}</p>
            <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
            <p>{this.props.jobDescription}</p>
        </div>
    );
  }
}

export default Experience;