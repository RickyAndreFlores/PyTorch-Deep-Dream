import React, { Component } from 'react';
import { } from 'semantic-ui-react';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
      <span className="spacer"></span>
        <div className="upload">
          <h1>DeepDream AI Project</h1>
          <p>Simply drag an image below or select one from the browser to begin!</p>
          <FilePond server="/api/v1/imageupload" />
          <p>Once it is done processing, take a look in your <span className="makemegreen">outputs</span> folder.</p>
        </div>
        <span id="credits">Created by Robert Crowdis, Nik Ackermann, and Ricky Flores</span>
      </div>
    );
  }
}

export default App;
