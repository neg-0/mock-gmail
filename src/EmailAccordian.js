import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import EmailDetail from "./EmailDetail"

const EmailAccordian = ({ app, emails }) => {

    let renderEmails = !emails ? <p>Loading emails</p> :
        emails.map((email, index) => {
            return (
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>{email.subject} - {email.sender}</Accordion.Header>
                    <Accordion.Body>
                        <EmailDetail app={app} email={email} />
                    </Accordion.Body>
                </Accordion.Item>
            )
        })

    return (
        <Accordion defaultActiveKey="0">
            {renderEmails}
        </Accordion>
    )
}

export default EmailAccordian