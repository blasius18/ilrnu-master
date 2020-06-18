import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Experience from './Experience';
import Skills from './Skills';

  class Details extends Component {
    render(){
      return(
        <div>
          <Grid container spacing={3}>
            <Grid item xs={4} className="grid-left">
              <Paper style={{ 'textAlign':'center', 'marginTop': '12px' }}>
                <img src="https://i.ibb.co/8xLzKHR/paul.jpg" alt="paul" className="trainer-details-image"/>
                <h2>Paul Louis</h2>
                <h4 className="font-color-orange">Web Developer for 2+ years</h4>
                <h6 style={{'paddingBottom': '6px'}}>Live Stream from Bangalore, India</h6>
              </Paper>
            </Grid>
            <Grid item xs={8} className="grid-right">
            <h2>Experience</h2>

            <Experience
              startYear={2013}
              endYear={2016}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

            <Experience
              startYear={2017}
              endYear={2020}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
  <hr style={{border: '1px solid #F3A433'}} />

            <h2>Skills</h2>
              <Skills
                skill="MongoDB"
                progress={75}
                />
                <Skills
                  skill="Express Js"
                  progress={60}
                  />
                  <Skills
                    skill="React Js"
                    progress={90}
                    />
                    <Skills
                      skill="Node Js"
                      progress={60}
                      />
                      <Skills
                        skill="Gatsby Js"
                        progress={85}
                        />
                        <Skills
                          skill="Wordpress + Divi"
                          progress={95}
                          />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
export default Details;
