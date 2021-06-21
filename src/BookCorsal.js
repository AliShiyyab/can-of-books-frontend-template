import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class BookCorsal extends React.Component{
    render(){
        const items = this.props.books.map(book => {
        return (
        <Carousel.Item >
        <img style={{position:'relative',left:"40%",width:"250px"}}
        src="https://www.econlib.org/wp-content/uploads/2020/10/stack-of-books-200x300.jpg"
        alt="Books"/>
        <Carousel.Caption>
        <h3 style={{color:'black'}}>{book.name}</h3>
        <p style={{color:'black'}} >{book.description}</p>
        </Carousel.Caption>
        </Carousel.Item> 
            )
        })
        return (
        <Carousel>
            {items}
            {console.log(items)}
        </Carousel>
    )
  }
}

export default BookCorsal;