import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
const url = "http://localhost:3001"

class App extends Component {


  componentDidMount() {
    this.fetchEmails()
  }

  async fetchEmails() {
    let response = await fetch(`${url}/emails`)
    let json = await response.json()

    console.log(json)
  }


  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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