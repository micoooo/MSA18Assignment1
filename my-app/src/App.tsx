import * as React from 'react';
import './App.css';
import Form from "./components/Form"
import Titles from "./components/Titles"
import Weather from "./components/Weather"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
