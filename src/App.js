import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react'
import EmailAccordian from './EmailAccordian'
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
    return (
      <div className="App" >
        <main>
          <EmailAccordian emails={this.state.emails} />
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