/* eslint-disable max-len */

import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const styles = {
  ContainerStyle: {
    paddingTop: '30px',
    marginLeft: '5%',
    marginRight: '5%'
  }
};

export class ContentContainer extends React.Component{
  render(){
    return(
      <div style={styles.ContainerStyle}>
        <Container fluid>
          <Header as='h2'>Most Recent</Header>
          <p>All work and no play makes dog a dull boy. All work and no play makes dog a dull boy. All work and no play makes dog a dull boy. All work and no play makes dog a dull boy. All work and no play makes dog a dull boy. All work and no play makes dog a dull boy. All work and no play makes dog a dull boy. All work and no play makes dog a dull boy. All work and no play makes dog a dull boy. All work and no play makes dog a dull boy. </p>
        </Container>
      </div>
    );
  }
}
