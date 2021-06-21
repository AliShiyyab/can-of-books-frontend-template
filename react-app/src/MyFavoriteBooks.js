import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './myFavoriteBooks.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BookCorsal from './BookCorsal';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books:[],
    }
  }

  async componentDidMount() {
    const email = this.props.auth0.user.email;
    const booksReq = await axios.get(`${process.env.REACT_APP}/books?email=${email}`);
    await this.setState({books:booksReq.data});
  }

  render() {
    return(
      <Row>
      { this.props.auth0.isAuthenticated && 
      <Col>
          {
          this.state.books.length > 0 &&
          <div>
          <BookCorsal books={this.state.books} />
          </div>
          }
      </Col>
    }
    </Row>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
