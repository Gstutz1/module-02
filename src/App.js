import React, {Component} from 'react';
import Country from './components/Country';
import {decrementMedal, getCountries, getTotalMedalCount, incrementMedal} from './services/CountryService';
import { Card, CardContent, Typography } from '@material-ui/core';
import './App.css';

class App extends Component {
  state = {
    countries: getCountries()
  }

  handleIncrement = (countryId, medalType) => {
    incrementMedal(countryId, medalType);
    this.setState({countries: getCountries()});
  }

  handleDecrement = (countryId, medalType) => {
    decrementMedal(countryId, medalType);
    this.setState({countries: getCountries()});
  }

  render() {
    const {countries} = this.state;
    return (
      <div>
        {countries.map(country => <Country handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} 
        key={country.id} country={country}/>)}
        <div style={{display:'flex', justifyContent:'center'}}>
          <Card className='Country'>
            <CardContent>
              <Typography variant='h6' className='CountryName'>Total Medals Awarded</Typography>
              <Typography variant='body1'>Total Gold Awarded - {getTotalMedalCount('gold')}</Typography>
              <Typography variant='body1'>Total Silver Awarded - {getTotalMedalCount('silver')}</Typography>
              <Typography variant='body1'>Total Bronze Awarded - {getTotalMedalCount('bronze')}</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

export default App;
