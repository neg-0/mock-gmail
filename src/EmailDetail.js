import ReplyPopup from "./ReplyPopup"

const EmailDetail = ({ app, email }) => {
    return (
        <div>
            <h3>{email.subject}</h3> <ReplyPopup app={app} email={email} />
            <h5>Sender: {email.sender} | Recipient: {email.recipient}</h5>
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