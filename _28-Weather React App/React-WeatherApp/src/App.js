import React, { Component } from 'react'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Form from './components/Form'
import Weather from './components/Weather'

import './App.css'
export default class App extends Component {

  state = {
    temp: '',
    city: '',
    humidity: '',
    describtion: ''
  }

  showInvalidInputs = () => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      didOpen: () => {
        MySwal.clickConfirm()
      }
    })
      .then(() => {
        return MySwal.fire(`<p> How to Search with Invalid Inputs, HA ?</p>`)
      })
  }

  getWeather = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value
    const city = e.target.elements.city.value
    // console.log(country , city);
    if (!country || !city) {
      this.showInvalidInputs()
      return
    }
    const ApiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
    const ApiDataJson = await ApiData.json()

    // * unknown city / bad request => the API answers without main & weather
    if (!ApiData.ok || !ApiDataJson.main || !ApiDataJson.weather) {
      Swal.fire({ icon: 'error', text: `Could not get the weather for "${city}, ${country}" (${ApiDataJson.message || ApiData.status})` })
      return
    }

    this.setState({
      temp: ApiDataJson.main.temp,
      city: ApiDataJson.name,
      humidity: ApiDataJson.main.humidity,
      type: ApiDataJson.weather[0].main
    })
  }

  render() {
    return (
      <>
        <Form getWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          temp={this.state.temp}
          humidity={this.state.humidity}
          type={this.state.type}
        />
      </>
    )
  }
}