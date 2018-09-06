import * as React from 'react'
import axios from 'axios'
import AppBar from './components/AppBar'
import FloatingActionButton from './components/FloatingActionButton'
import WeatherCard from './components/WeatherCard'

interface IState {
  loading: any,
  weather: any
}

class App extends React.Component<{}, IState> {

  constructor(props:any) {
    super(props)
    this.state = {
      weather: [],
      loading: true
    }
  }

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Chicago&APPID=79badf94102e008963c2d50b6cfa43f2&units=metric&cnt=8')
      .then(response => {
        this.setState({
          weather: response.data,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }

  render() {
    return (
      <div>
        <AppBar />
        <div>
          {
            (this.state.loading)
              ? <p>Loading . . . </p>
              : <WeatherCard data={this.state.weather} />
          }
        </div>
        <FloatingActionButton />
      </div>
    );
  }
}

export default App;
