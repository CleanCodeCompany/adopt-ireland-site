import React from 'react';
import { PetCard } from './PetCard'
import { Grid, Segment } from 'semantic-ui-react'

const styles = {
  ContainerStyle: {
    paddingTop: '30px',
    marginLeft: '5%',
    marginRight: '5%'
  }
};

export class PetGrid extends React.Component {

  render() {
    return (
      <div style={styles.ContainerStyle}>
        <Grid columns='equal'>
          <Grid.Row columns={5}>
            <Grid.Column>
              <PetCard/>
            </Grid.Column>
            <Grid.Column>
              <PetCard/>
            </Grid.Column>
            <Grid.Column>
              <PetCard/>
            </Grid.Column>
            <Grid.Column>
              <PetCard/>
            </Grid.Column>
            <Grid.Column>
              <PetCard/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={5}>
            <Grid.Column>
              <PetCard/>
            </Grid.Column>
            <Grid.Column>
              <PetCard/>
            </Grid.Column>
            <Grid.Column>
              <PetCard/>
            </Grid.Column>
            <Grid.Column>
              <PetCard/>
            </Grid.Column>
            <Grid.Column>
              <PetCard/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
