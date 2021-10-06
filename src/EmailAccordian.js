import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import EmailDetail from "./EmailDetail"

const EmailAccordian = ({ app, emails }) => {

    let renderEmails = !emails ? <p>Loading emails</p> :
        emails.map((email) => {
            return (
                <Accordion.Item eventKey={email.id}>
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