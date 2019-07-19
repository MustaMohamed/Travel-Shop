import React, { Component } from 'react';
import {
  Button,
  Container,
  Card,
  Dropdown,
  Grid,
  Icon,
  Input,
  Segment,
  Image,
  Rating, Statistic
} from 'semantic-ui-react';
import '../styles/home.css';

const countryOptions = [
  { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
  { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
]

class Home extends Component {

  render() {
    return (
      <div className={'home-page'}>
        <div className="hero">
          <Grid container>
            <Grid.Column tablet={16} computer={8}>
              <div className={'header'}>
                <h1 className={'hero-header'}>Where's your next adventure ?</h1>
                <p className={'hero-subheader'}>Find worldwide accommodation <br/>at the very best practice...</p>
              </div>
              <div className="actions">
                <Input fluid size={'huge'} icon='compass' iconPosition='left'
                       placeholder='Where would you like to stay ?'/>
                <Segment.Group horizontal>
                  <Segment className={'date-container'}>
                    <Icon size={'large'} name={'sign-in'}/>
                    <div className={'date-action'}>
                      <p>From:</p>
                      <h5>Mon 21 Oct 18</h5>
                    </div>
                  </Segment>
                  <Segment className={'date-container'}>
                    <div className={'date-action'}>
                      <p>To:</p>
                      <h5>Mon 21 Oct 18</h5>
                    </div>
                  </Segment>
                </Segment.Group>

                <Dropdown
                  placeholder='Search for type..'
                  fluid
                  search
                  selection
                  className={'dd-search-type'}
                  icon={<Icon className={'dd-icon'} name={'angle down'} size={'large'}/>}
                  options={countryOptions}
                />

                <Button className={'find-acc'} size={'huge'} inverted fluid basic>Find accommodation</Button>

              </div>
            </Grid.Column>
          </Grid>

        </div>

        <div className="services">
          <Grid container stackable columns={4}>
            <Grid.Row>
              <Grid.Column className={'serv-item'}>
                <Icon size={'big'} color={'teal'} name={'map marker alternate'}/>
                <h3>24/7 Customer support</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid dicta fugiat impedit
                  inventore</p>
              </Grid.Column>
              <Grid.Column className={'serv-item'}>
                <Icon size={'big'} color={'teal'} name={'map marker alternate'}/>
                <h3>Great Value</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid dicta fugiat impedit
                  inventore</p>
              </Grid.Column>
              <Grid.Column className={'serv-item'}>
                <Icon size={'big'} color={'teal'} name={'map marker alternate'}/>
                <h3>Free cancellation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid dicta fugiat impedit
                  inventore</p>
              </Grid.Column>
              <Grid.Column className={'serv-item'}>
                <Icon size={'big'} color={'teal'} name={'map marker alternate'}/>
                <h3>Worldwide availability</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid dicta fugiat impedit
                  inventore</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div className="reviews">
          <Container>
            <h1 className={'review-header'}>Recently viewed hotels</h1>

            <Card.Group stackable itemsPerRow={3}>
              <Card>
                <Image src='https://picsum.photos/320/240' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Leonardo Hotel Barcelona Gran Via</Card.Header>
                  <Card.Meta>Diputacio, 100, Eixample, Barcelona, Spain</Card.Meta>
                  <Card.Description>
                    <Rating icon='star' defaultRating={3} maxRating={5}/>
                  </Card.Description>
                </Card.Content>
                <Card.Content>
                  <Statistic color='red' size={'small'}>
                    <Statistic.Label>From</Statistic.Label>
                    <Statistic.Value>&euro;2,204</Statistic.Value>
                  </Statistic>
                </Card.Content>
              </Card>
              <Card>
                <Image src='https://picsum.photos/320/240' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Leonardo Hotel Barcelona Gran Via</Card.Header>
                  <Card.Meta>Diputacio, 100, Eixample, Barcelona, Spain</Card.Meta>
                  <Card.Description>
                    <Rating icon='star' defaultRating={3} maxRating={5}/>
                  </Card.Description>
                </Card.Content>
                <Card.Content>
                  <Statistic color='red' size={'small'}>
                    <Statistic.Label>From</Statistic.Label>
                    <Statistic.Value>&euro;2,204</Statistic.Value>
                  </Statistic>
                </Card.Content>
              </Card>
              <Card>
                <Image src='https://picsum.photos/320/240' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Leonardo Hotel Barcelona Gran Via</Card.Header>
                  <Card.Meta>Diputacio, 100, Eixample, Barcelona, Spain</Card.Meta>
                  <Card.Description>
                    <Rating icon='star' defaultRating={3} maxRating={5}/>
                  </Card.Description>
                </Card.Content>
                <Card.Content>
                  <Statistic color='red' size={'small'}>
                    <Statistic.Label>From</Statistic.Label>
                    <Statistic.Value>&euro;2,204</Statistic.Value>
                  </Statistic>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </div>

        <div className="destinations">
          <Container>
            <Container>
              <h1 className={'destinations-header'}>Popular destinations</h1>

              <Card.Group stackable itemsPerRow={3}>
                <Card>
                  <Image src='https://picsum.photos/320/240' wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>Leonardo Hotel Barcelona Gran Via</Card.Header>
                  </Card.Content>

                </Card>
                <Card>
                  <Image src='https://picsum.photos/320/240' wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>Leonardo Hotel Barcelona Gran Via</Card.Header>

                  </Card.Content>
                </Card>
                <Card>
                  <Image src='https://picsum.photos/320/240' wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>Leonardo Hotel Barcelona Gran Via</Card.Header>

                  </Card.Content>

                </Card>
              </Card.Group>
            </Container>
          </Container>
        </div>

        <div className="subscription">
          <Container>
            <Segment>
              <Icon color={'red'} size={'big'} name={'smile outline'}/>
              <span className={'text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci omnis ratione, repellat vel
              voluptates!</span>
              <Input placeholder='Your email address'/>
              <Button floated='right' basic color={'red'}>Subscribe</Button>
            </Segment>
          </Container>
        </div>


      </div>
    );
  }
}

export default Home;