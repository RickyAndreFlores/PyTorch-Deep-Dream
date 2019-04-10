import React, { Component } from 'react';
import { } from 'semantic-ui-react';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilePond server="/api/v1/imageupload" />
      </div>
    );
  }
}

export default App;
