import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Books extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.element.title}</Card.Title>
                        <Card.Text>description: {this.props.element.description} </Card.Text>
                        <Card.Text>status: {this.props.element.status} </Card.Text>
                        <Card.Text>email: {this.props.element.email} </Card.Text>

                        <Button variant='danger' onClick={() => { this.props.deleteBook(this.props.element._id) }}>Delete</Button>
                        <Button variant='dark' onClick={this.props.updateBookForm}>Update</Button>

                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Books;