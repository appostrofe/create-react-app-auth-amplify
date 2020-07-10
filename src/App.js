import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);

const federated = {
  google_client_id:
    "254192244285-9gba77uanfstfmcgv0q2c40ucv81657g.apps.googleusercontent.com",
  googleClientId:
    "254192244285-9gba77uanfstfmcgv0q2c40ucv81657g.apps.googleusercontent.com",
  oauthConfig: {
    redirectSignIn: "http://localhost:3000/",
    redirectSignOut: "http://localhost:3000/",
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
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

export default withAuthenticator(App, {
  federated: federated,
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
    signUpFields: [
      { label: "Name", key: "name", required: true, type: "string" },
    ],
  },
});
