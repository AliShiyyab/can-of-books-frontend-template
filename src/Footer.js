import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>&copy; Best Books library made by Ali and Abed Alrahman</Navbar.Brand>
    </Navbar>
    )
  }
}

export default Footer;
