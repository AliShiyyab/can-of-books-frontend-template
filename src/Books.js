import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

class Books extends React.Component {
  render() {
    const items = this.props.books.map((book, index) => {
      return (
        <Card key={index}>
          <Card.Img src='https://www.stylist.co.uk/images/app/uploads/2019/12/17162852/the-end-of-a-book-1268x845.jpeg?w=1200&h=1&fit=max&auto=format%2Ccompress' alt='Books IMG' />
          <Card.Body>
            <Card.Text>
              <h3>Book Name :  {book.name}</h3>
            </Card.Text>
            <Card.Text>
              Book Description : {book.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={() => this.props.deleteBook(index)}>Delete</Button>
            <Button onClick={() => this.props.handleShowUpdateForm(index)} style={{ marginLeft: '3rem' }}>Update</Button>
          </Card.Footer>
        </Card>
      )
    })

    return (
      <Row >
        {items}
      </Row>
    )
  }
}

export default Books;