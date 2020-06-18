import React, { Component } from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';

  class Trainers extends Component {
    render(){
      return(
        <div>
        <CardDeck className="trainer-deck">
          <Card className="trainer-card">
            <Card.Img variant="top" src="https://i.ibb.co/8xLzKHR/paul.jpg" alt="paul" className="trainer-image"/>
            <Card.Body>
              <Card.Title className="font-color-orange">Paul Louis, Web Developer</Card.Title>
              <Card.Title>Bangalore</Card.Title>
              <Card.Text>
                My career objective is to contribute to the constantly evolving demands of the Web by providing solutions and simplifying processes.
              </Card.Text>
            </Card.Body>
            <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <span><StarOutlinedIcon /></span>}
                starCount={5}
                value={4}
            />
            <Card.Footer className="card-footer">
              <small className="text-muted">117 students enrolled.</small>
              <Button className="know-more-button">Know more</Button>
            </Card.Footer>
          </Card>
          <Card className="trainer-card">
            <Card.Img variant="top" src="https://i.ibb.co/8xLzKHR/paul.jpgg" className="trainer-image"/>
            <Card.Body>
              <Card.Title className="font-color-orange">Paul Louis, Web Developer</Card.Title>
              <Card.Title>Bangalore</Card.Title>
              <Card.Text>
                My career objective is to contribute to the constantly evolving demands of the Web by providing solutions and simplifying processes.
              </Card.Text>
            </Card.Body>
            <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <span><StarOutlinedIcon /></span>}
                starCount={5}
                value={4}
            />
            <Card.Footer className="card-footer">
              <small className="text-muted">117 students enrolled.</small>
              <Button className="know-more-button">Know more</Button>
            </Card.Footer>
          </Card>
          <Card className="trainer-card">
            <Card.Img variant="top" src="https://i.ibb.co/8xLzKHR/paul.jpg" className="trainer-image"/>
            <Card.Body>
              <Card.Title className="font-color-orange">Paul Louis, Web Developer</Card.Title>
              <Card.Title>Bangalore</Card.Title>
              <Card.Text>
                My career objective is to contribute to the constantly evolving demands of the Web by providing solutions and simplifying processes.
              </Card.Text>
            </Card.Body>
            <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <span><StarOutlinedIcon /></span>}
                starCount={5}
                value={4}
            />
            <Card.Footer className="card-footer">
              <small className="text-muted">117 students enrolled.</small>
              <Button className="know-more-button">Know more</Button>
            </Card.Footer>
          </Card>
          </CardDeck>
          <CardDeck className="trainer-deck">
          <Card className="trainer-card">
            <Card.Img variant="top" src="https://i.ibb.co/8xLzKHR/paul.jpg" className="trainer-image"/>
            <Card.Body>
              <Card.Title className="font-color-orange">Paul Louis, Web Developer</Card.Title>
              <Card.Title>Bangalore</Card.Title>
              <Card.Text>
                My career objective is to contribute to the constantly evolving demands of the Web by providing solutions and simplifying processes.
              </Card.Text>
            </Card.Body>
            <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <span><StarOutlinedIcon /></span>}
                starCount={5}
                value={4}
            />
            <Card.Footer className="card-footer">
              <small className="text-muted">117 students enrolled.</small>
              <Button className="know-more-button">Know more</Button>
            </Card.Footer>
          </Card>
          <Card className="trainer-card">
            <Card.Img variant="top" src="https://i.ibb.co/8xLzKHR/paul.jpg" className="trainer-image"/>
            <Card.Body>
              <Card.Title className="font-color-orange">Paul Louis, Web Developer</Card.Title>
              <Card.Title>Bangalore</Card.Title>
              <Card.Text>
                My career objective is to contribute to the constantly evolving demands of the Web by providing solutions and simplifying processes.
              </Card.Text>
            </Card.Body>
            <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <span><StarOutlinedIcon /></span>}
                starCount={5}
                value={4}
            />
            <Card.Footer className="card-footer">
              <small className="text-muted">117 students enrolled.</small>
              <Button className="know-more-button">Know more</Button>
            </Card.Footer>
          </Card>
          <Card className="trainer-card">
            <Card.Img variant="top" src="https://i.ibb.co/8xLzKHR/paul.jpg" className="trainer-image"/>
            <Card.Body>
              <Card.Title className="font-color-orange">Paul Louis, Web Developer</Card.Title>
              <Card.Title>Bangalore</Card.Title>
              <Card.Text>
                My career objective is to contribute to the constantly evolving demands of the Web by providing solutions and simplifying processes.
              </Card.Text>
            </Card.Body>
            <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <span><StarOutlinedIcon /></span>}
                starCount={5}
                value={3}
            />
            <Card.Footer className="card-footer">
              <small className="text-muted">117 students enrolled.</small>
              <Button className="know-more-button">Know more</Button>
            </Card.Footer>
          </Card>
      </CardDeck>
      </div>
      );
    }
  }

export default Trainers;
