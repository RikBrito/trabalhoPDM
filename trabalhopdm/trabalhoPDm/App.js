import React from "react";
import Home from "./src/pages/home/index.js";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBowP5XQh221jXixV2p82GMNzX2sZLl4z8",
    authDomain: "events-cdb1c.firebaseapp.com",
    databaseURL: "https://events-cdb1c.firebaseio.com",
    projectId: "events-cdb1c",
    storageBucket: "events-cdb1c.appspot.com",
    messagingSenderId: "579968662902",
    appId: "1:579968662902:web:e620508b86cb9844"
};
firebase.initializeApp(config);
src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js";

  https://firebase.google.com/docs/web/setup#config-web-app

export default class App extends React.Component {
  render() {
    return <Home />;
  }

  
}

  