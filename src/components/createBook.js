import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap/'

class AddBook extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handelClose}>
                    <Modal.Header closeButton >
                        <Modal.Title>Add Book Modal 📕</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.addBook}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" name='title' placeholder='Enter Book Name' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" name='description' placeholder='Enter Book description' />
                            </Form.Group>
                            <Button variant="primary" type="submit" value="Add Book">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default AddBook