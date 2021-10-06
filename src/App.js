import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
const url = "http://localhost:3001"

class App extends Component {
  constructor() {
    super()
    this.state = {
      emails: []
    }
  }


  componentDidMount() {
    this.fetchEmails()
  }

  async fetchEmails() {
    let response = await fetch(`${url}/emails`)
    let json = await response.json()

    this.setState({ emails: json })
    console.log(json)
  }


  render() {

    let renderEmails = !this.state.emails ? <p>Loading emails</p> :
      this.state.emails.map((email) => {
        return (
          <p>{email.subject} - {email.sender}</p>
        )
      })

    return (
      <div className="App" >
        <main>
          {renderEmails}
        </main>
      </div>
    );
  }
}

export default App;

// Mandatory Content

// View all of my email messages (subject line + sender)
// View one of my email messages with all of its details
// Send an email
// Search for a specific email by subject