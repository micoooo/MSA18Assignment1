import * as React from 'react'
import axios from 'axios'
import AppBar from './components/AppBar'
import FloatingActionButton from './components/FloatingActionButton'
import WeatherCard from './components/WeatherCard'
import dayContext from './components/day-context'
import Searchbar from './components/Searchbar';

interface IState {
  loading: any,
  weather: any,
  day: any,
  city: any
}

class App extends React.Component<{}, IState> {
  constructor(props:any) {
    super(props)
    this.state = {
      weather: [],
      loading: true,
      day: 0,
      city: 'auckland'
    }
  }

  public GetData() {
    const url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+this.state.city+'&APPID=79badf94102e008963c2d50b6cfa43f2&units=metric&cnt=8'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      }
    })
      .then((response:any) => {
        if (response){
          response.json().then((data:any) => this.changeWeather(data));
        }
      })
  }

  public changeWeather = (weatherJSON: any) =>{
    this.setState({
      weather: weatherJSON,
      loading: false
    })
    console.log(this.state.weather)
  }

  public handleSearch = (cityString: any) => {
    // setState does not immediately change the state, 
    // hence the anonymous function is called when state is CHANGED
    this.setState({city: cityString}, () =>{;
      this.GetData();
    });
  }

  public render() {
    return (
      <div>
        <AppBar />
        <Searchbar onSearch = {this.handleSearch}/>
        <div>
          {
            (this.state.loading)
              ? <p>Loading . . . </p>
              : 
              <WeatherCard data={this.state.weather} context={this}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
