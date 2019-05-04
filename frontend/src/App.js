import React, { Component } from 'react';
import { } from 'semantic-ui-react';
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: [
        {
          source: "index.html",
          options: {
            type: "local"
          }
        }
      ]
    };
  }

  handleInit() {
    console.log('FilePond instance has initialised', this.pond);
  }

  startScript() {
      console.log('Firing upload...');
      // TODO: Find out why this next line is crashing the app
      // console.log(this.state.files)
      // Add the ability to start the python script here using the images.
      // Should be able to reference state here to grab the files.
  }

  render() {
    return (
      <div className="app-container">
        <span className="spacer"></span>
        <div className="upload">
          <h1>DeepDream AI Project</h1>
          <p>Simply drag an image below or select one from the browser to begin!</p>

          <FilePond ref={ref => this.pond = ref}
            files={this.state.files}
            allowMultiple={false}
            maxFiles={1}
            server="/api"
            oninit={() => this.handleInit()}
            onupdatefiles={(fileItems) => {
              // Set current file objects to this.state
              this.setState({
                files: fileItems.map(fileItem => fileItem.file)
              });
            }}>
          </FilePond>

          <button onClick={this.startScript}>Start dreaming</button>
          <p>Once it is done processing, take a look in your <span className="makemegreen">outputs</span> folder.</p>
        </div>
        <span id="credits">Created by Robert Crowdis, Nik Ackermann, and Ricky Flores</span>
      </div>
    );
  }
}

export default App;
