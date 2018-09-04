import * as React from 'react';
import './App.css';
import Form from "./components/Form"
import Titles from "./components/Titles"
import Weather from "./components/Weather"

const API_KEY = "855dcc486ca0e07e59b3c6ffcac0fcd6";


class App extends React.Component {
  constructor(props:any) {
    super(props);
    this.getWeather = this.getWeather.bind(this)
  }
  getWeather() {
    console.log(this.props);
  }
  private getWeather = async (event:any) => {
    event.preventDefault();
    const apiCall = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric');
    const data = await apiCall.json();
    console.log(data);
  }
  public render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
