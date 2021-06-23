import React from 'react';
//bootstrap component
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
//css files

class Books extends React.Component{
  render(){
    const val = this.props.books;
    let items = val.map((book , index) => {
      return (
              <Card key={index}>
                <Card.Img src='https://www.econlib.org/wp-content/uploads/2020/10/stack-of-books-200x300.jpg' alt='' />
                <Card.Body>
                  <Card.Text>
                    <h3>Book Name :  {book.name}</h3>
                  </Card.Text>
                  <Card.Text>
                    Book Description : {book.description}                    
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button Click={() => this.props.deleteBook(index)}>Delete</Button>
                </Card.Footer>
              </Card>
      )
})

    return(
      <Row >
        {items}
      </Row>
    )
  }
}

export default Books ;