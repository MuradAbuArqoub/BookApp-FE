import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap/'
class UpdateBook extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handelClose}>
                    <Modal.Header closeButton >
                        <Modal.Title>Update Book Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateBook}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" name='title' defaultValue={this.props.UpdateBookInfo.title} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="text" name='description' defaultValue={this.props.UpdateBookInfo.description} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Control type="text" name='status' defaultValue={this.props.UpdateBookInfo.status} />
                            </Form.Group>
                            <Button variant="primary" type="submit" value="Update Book">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default UpdateBook;