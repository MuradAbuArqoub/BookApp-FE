import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios'
import { Button } from 'react-bootstrap/'
import { withAuth0 } from '@auth0/auth0-react';
import CreateBook from './components/CreateBook';
import Books from './components/Books';
import UpdateBook from './components/UpdateBook';
class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.auth0.user.email,
      BookData: [],
      showModel: false,
      UpdateBookInfo: [],
      showUpdateModal: false,

    }
  }

  handelShow = () => {
    this.setState({
      showModel: true,
      showUpdateModal: true,
    })
  }

  handelClose = () => {
    this.setState({
      showModel: false,
      showUpdateModal: false,
    })
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
  // http://localhost:3001/createBook?email1=email&title1=${bookName}&description1=${bookDescription}&status1

  createBook = async (e) => {
    e.preventDefault();

    let bookFormInfo = {
      email: this.state.email,
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value
    }

    let newBookData = await axios.post(`http://localhost:3001/createBook`, bookFormInfo);
    console.log(newBookData);
    this.setState({
      BookData: newBookData.data
    });
  }

  deleteBook = async (bookid) => {
    let bookDataDelete = await axios.delete(`http://localhost:3001/deleteBook?email=${this.state.email}&bookid=${bookid}`)
    this.setState({
      BookData: bookDataDelete.data
    });
    console.log('delete', bookDataDelete);

  }


  updateBookForm =  () => {
     this.setState({
      showUpdateModal: true,
      // UpdateBookInfo: bookInfo
    })
  }
  updateBookFormCloseHandler =  () => {
     this.setState({
      showUpdateModal: false,

    })
  }

  updateBook = async (e) => {
    e.preventDefault();
    console.log('Book ID', this.state.UpdateBookInfo._id);

    let bookFormInfo = {
      email: this.state.email,
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      bookId: this.state.UpdateBookInfo._id,

    }

    let newBookData = await axios.put(`http://localhost:3001/updateBook`, bookFormInfo);
    this.setState({
      UpdateBookInfo: newBookData.data
    })
    console.log('newbook',newBookData);
    console.log(this.state.UpdateBookInfo);
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
        </Jumbotron>

        <Button onClick={this.handelShow} >Add Book</Button>

        {this.state.showModel &&
          <CreateBook createBook={this.createBook} show={this.state.showModel} handelClose={this.handelClose} handelShow={this.handelShow} />
        }
        {/* {this.state.showUpdateModal &&
          <UpdateBook UpdateBookInfo={this.state.UpdateBookInfo} updateBook={this.updateBook} show={this.state.showUpdateModal }handelClose={this.handelClose} handelShow={this.handelShow}/>
        } */}
        {/* <Button variant='dark' onClick={this.handelShow}>Update</Button> */}

        {this.state.BookData.map((element, index) => {
          return (
            <Books key={index} element={element} deleteBook={this.deleteBook} updateBookForm={this.updateBookForm} />
          )
        })}

      </div>

    )
  }
}

export default withAuth0(MyFavoriteBooks);