import React from "react";
import Home from "./src/pages/home/index.js";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBowP5XQh221jXixV2p82GMNzX2sZLl4z8",
  authDomain: "events-cdb1c.firebaseapp.com",
  databaseURL: "https://events-cdb1c.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
  PROJECT_ID:"events-cdb1c",
  messagingSenderId:""
};
firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return <Home />;
  }
}
