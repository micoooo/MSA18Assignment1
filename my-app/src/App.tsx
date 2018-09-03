import * as React from 'react';
import './App.css';
import Titles from "./components/Titles"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Titles />
      </div>
    );
  }
}

export default App;
