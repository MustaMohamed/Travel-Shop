import React, { Component } from 'react';
import { Container, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Home'
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className={'app-navbar'}>
        <Container>
          <Menu color={'red'} inverted text size='huge'>
            <Menu.Item header className={'logo-header'}>Travelshop.com</Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item
                name='Home'
                active={activeItem === 'Home'}
                onClick={this.handleItemClick}
                as={Link} to="/"
              />
              <Menu.Item
                name='CarRental'
                active={activeItem === 'CarRental'}
                onClick={this.handleItemClick}
                as={Link} to="/about"
              />

              <Dropdown item text='UK(E)' icon='angle down'>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/about" text='About'/>
                  <Dropdown.Item as={Link} to={'/'} text='Home'/>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown item text='English' icon='angle down'>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/about" text='English'/>
                  <Dropdown.Item as={Link} to={'/'} text='Arabic'/>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item
                name='SignIn'
                active={activeItem === 'SignIn'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>

        </Container>
      </div>
    );
  }
}

export default Navbar;