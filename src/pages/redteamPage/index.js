import React, { Component } from 'react';
import { Container, } from 'reactstrap';
import RedTeamHeader from './redteamHeader';
import { animateScroll } from 'react-scroll';


export default class RedTeam extends Component {

  componentDidMount() {
    animateScroll.scrollToTop();
  }

  render() {
    return (

      <div>
        <RedTeamHeader />
        <Container className="mt-5 mb-5" style={{ paddingTop: "70px" }}>
          <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1.5rem' }}>Red Team</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut tellus purus. In elementum, mi vitae finibus ultricies, enim mauris pulvinar velit, sed fermentum lorem nisl a ligula.</p>
        </Container>
      </div>
    );
  }
}
