import { Modal, Button, Container, Form, Alert } from 'react-bootstrap'
import { Component, useState } from 'react'

class ReplyPopup extends Component {
    constructor(props) {
        super(props)

        this.app = props.app
        this.email = props.email
        this.state = { email: props.email, replyCallbackStatus: "", replyCallbackMessage: "" }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
        this.sendEmailCallback = this.sendEmailCallback.bind(this)
    }

    showModal() {
        this.setShow(true)
    }

    hideModal() {
        this.setShow(false)
    }

    setShow(show) {
        this.setState({ showModal: show, replyCallbackStatus: "", replyCallbackMessage: "", replyMessage: "" })
    }

    handleChange(event) {
        switch (event.target.id) {
            case "replyMessage": this.setState({ replyMessage: event.target.value })
        }

        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    sendEmail() {

        // {
        //     "sender": String,
        //     "recipient": String,
        //     "subject": String,
        //     "message": String,
        //     "date": Date,
        //     "id": Number
        //   }


        console.log("sending email")

        let emailObj = {
            sender: this.email.recipient,
            recipient: this.email.sender,
            subject: this.email.subject,
            message: this.state.replyMessage,
            date: Date.now(),
            id: this.email.id + 1000
        }

        this.app.sendEmail(emailObj, this.sendEmailCallback)
    }

    sendEmailCallback(status) {
        console.log(status.status, status.message)
        this.setState({ replyCallbackStatus: status.status, replyCallbackMessage: status.message })
    }

    render() {


        let alert
        switch (this.state.replyCallbackStatus) {
            case "": alert = <></>
                break
            case "success": alert = (<Alert variant="success">
                {this.state.replyCallbackMessage}
            </Alert>)
                break
            default: alert = (<Alert variant="danger">
                {this.state.replyCallbackMessage}
            </Alert>)

        }

        let sendButton = this.state.replyCallbackStatus === "success" ?
            (<></>) :
            (<Button variant="primary" onClick={this.sendEmail}>
                Send
            </Button>)

        return (
            <>
                <Button variant="primary" onClick={this.showModal}>
                    Reply
                </Button>

                <Modal size="lg" show={this.state.showModal} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Replying to: {this.state.email.subject}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container fluid>
                            <Form onSubmit={this.app.sendEmail} >
                                <Form.Control id="replyMessage" value={this.state.replyMessage} onChange={this.handleChange} as="textarea" rows={3} />
                            </Form>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        {alert}
                        <Button variant="secondary" onClick={this.hideModal}>
                            Close
                        </Button>
                        {sendButton}
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ReplyPopup