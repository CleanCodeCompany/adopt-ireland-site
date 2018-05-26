import React from 'react'
import { Image } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import { Grid, Segment } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'

const styles = {
  Overlay: {
    backgroundImage: "url(" + "./BlackDog2.jpg" + ")",
    marginLeft: '0%',
    marginRight: '0%',
    height: "600px"
  },
  Opacity: {
    opacity: 0.5
  }

};

export class TitleCard extends React.Component{
  render(){
    return(

      <div>
          <section style={styles.Overlay}>
            <div style={{marginLeft: '10%', marginRight: '55%',paddingTop: '30px'}}>

              <Grid columns='equal'>
                <Grid.Column>
                  <Button inverted size='tiny' fluid>Home</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button inverted size='tiny' fluid>Pets</Button>
                </Grid.Column>
                <Grid.Column>

                  <Button basic inverted size='tiny' animated='vertical' fluid>
                    <Button.Content visible>Contact</Button.Content>
                    <Button.Content hidden>
                      <Icon name='comments' />
                    </Button.Content>
                  </Button>
                </Grid.Column>
              </Grid>
            </div>
            <div>
              <header style={{fontSize: 70, color: 'White' , paddingTop: '100px', fontFamily: 'Trebuchet MS', textAlign: 'center'}}>
                ADOPT IRELAND
              </header>
            </div>

            <div style={{marginLeft: '10%',marginRight: '10%',paddingTop: '100px'}}>

              <Grid columns='equal'>
                <Grid.Row verticalAlign='bottom'>
                <Grid.Column>
                  <p style={{color: 'Peru'}}>Animal:</p>
                  <Dropdown placeholder='Select Animal' fluid search selection options={options} />
                </Grid.Column>
                  <Grid.Column width={6}>
                    <p style={{color: 'Peru'}}>Breed:</p>
                    <Dropdown placeholder='Select Breed' fluid multiple selection options={options} fluid/>
                  </Grid.Column>
                  <Grid.Column>
                    <p style={{color: 'Peru'}}>Age:</p>
                    <Dropdown placeholder='Select Age' fluid search selection options={options} />
                  </Grid.Column>
                  <Grid.Column>
                    <p style={{color: 'Peru'}}>Gender:</p>
                    <Dropdown placeholder='Select Gender' fluid search selection options={options} />
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <div >
                    <Button color='brown' animated>
                      <Button.Content visible>Search</Button.Content>
                      <Button.Content hidden>
                        <Icon name='search' />
                      </Button.Content>
                    </Button>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>

          </section>

      </div>

    );
  }
}


const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]
