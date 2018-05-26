import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export class PetCard extends React.Component {

  render() {
    return (
      <div>
      <Card
        href='#card-example-link-card'
        header='Doggy McDogface'
        meta='Cross-Breed'
        description='I am a cat, please adopt me.'
        image={'./PetProfile.jpg'}
        color='brown' />
      </div>
    );
  }
}
