import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { withAuth0 } from '@auth0/auth0-react';
import createBook from './components/createBook';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.auth0.user.email,
      BookData: [],
      searchQuery: ''
    }
  }

  componentDidMount = async () => {
    // http://localhost:3001/books?email=murad@gmail.com
    console.log('asdfg')
    let URL = `http://localhost:3001/getBook?email=${this.state.email}`
    let Data = await axios.get(URL);

    await this.setState({
      BookData: Data.data
    })
    console.log(this.state.BookData)
  }

  createBook = async(e) =>{
    e.preventDefault()

  }

  render() {
    return (
        <div>
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <createBook/>
        {this.state.BookData.map((element, index) => {
          return (

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{element.Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-bold">Books</Card.Subtitle>
                <Card.Text>description: {element.description} </Card.Text>
                <Card.Text>status: {element.status} </Card.Text>
                <Card.Text>email: {element.email} </Card.Text>
                
              </Card.Body>
            </Card>

          )
        })}
      </Jumbotron>
      
      </div>
      
    )
  }
}

export default withAuth0 (MyFavoriteBooks);
