import './App.css';
import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

class App extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };
  
  handleChange = (editorState) => {
    console.log(editorState.toJS());
    this.setState({ editorState });
  };
  
  handlePastedFiles = (files) => {
    console.log(files);
    return 'handled';
  };
  
  focus = () => {
    this.editor.focus();
  };
  
  render() {
    return (
      <div className="Editor" onClick={this.focus}>
        <Editor 
          ref={(editor) => this.editor = editor}
          editorState={this.state.editorState}
          onChange={this.handleChange}
          handlePastedFiles={this.handlePastedFiles}
        />
      </div>
    )
  }
}

export default App;