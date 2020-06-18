import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { Grid } from '@material-ui/core';

class Skills extends Component {
  render() {
    return(
        <div style={{display: 'flex'}}>
            <Grid container>
                <Grid item xs={4}>{this.props.skill}</Grid>
                <Grid item xs={8}><Progress percent={this.props.progress} status="success"/></Grid>
            </Grid>
        </div>
    );
  }
}

export default Skills;