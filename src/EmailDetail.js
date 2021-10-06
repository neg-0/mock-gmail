const EmailDetail = ({ email }) => {
    return (
        <div>
            <h3>{email.subject}</h3>
            <h4>Sender: {email.sender} | Recipient: {email.recipient}</h4>
            <p>{email.message}</p>
        </div>
    )
}

{/* date: "2020-08-23T18:25:43.511Z"
id: 1
message: "Mr. and Mrs. Dursley, of number four, Privet Drive, wereproud to say that they were perfectly normal, thankyou very much."
recipient: "jane@galvanize.com"
sender: "katie@galvanize.com"
subject: "Standup meeting" */}

export default EmailDetail