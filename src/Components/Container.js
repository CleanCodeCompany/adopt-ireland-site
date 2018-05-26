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
          <p>Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today.</p>
        </Container>
      </div>

    );
  }
}
