import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react'
import EmailAccordian from './EmailAccordian'
import NavBar from './NavBar'
const url = "http://localhost:3001"

class App extends Component {
  constructor() {
    super()
    this.state = {
      emails: [],
      filteredEmails: [],
      subjectFilter: ""
    }
  }

  search(event) {
    console.log("searching")
    console.log("event", event)
    console.log("elements", event.elements)
    console.log("searchBoxValue state", this.state.searchBoxValue)

    let subjectFilter = this.state.searchBoxValue
    this.setState({ subjectFilter: subjectFilter })
    this.filterEmails(subjectFilter)
  }

  clearFilter() {
    this.setState({ subjectFilter: "" })
    this.filterEmails()
  }

  filterEmails(subjectFilter = "") {
    let filtered = this.state.emails.filter(email => email.subject.toLowerCase().includes(subjectFilter.toLowerCase()))
    this.setState({ filteredEmails: filtered })
  }

  async componentDidMount() {
    await this.fetchEmails()
    this.filterEmails()
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
        <header>
          <NavBar app={this} />
        </header>
        <main>
          <EmailAccordian emails={this.state.filteredEmails} />
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