import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export default class Header extends Component {

  constructor(props) {
    super(props)
  }

//This is the header. Pretty self explanatory. Navbar is a pre built
//component included in the react-bootstrap library.
  render() {
    return (
      <Navbar className="navbar default fixed-top header">
        <Navbar.Header>
          <Navbar.Brand>
            <Link className='header-element' to="/"> P🍩ppn </Link>
          </Navbar.Brand>
        </Navbar.Header>

        <Link className='header-element' to="/my-page"> My Profile </Link>
        <Link className='header-element' to="/styles"> Explore Styles </Link>
        <Link className='header-element' to="/new-post"> Make a Post </Link>
      </Navbar>)
  }
}
