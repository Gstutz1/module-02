import React, {Component} from 'react';
import Countries from './components/Countries';
import './App.css';

class App extends Component {
  state = {countries: [
    { id: 1, name: 'United States', goldMedalCount: 2 },
    { id: 2, name: 'China', goldMedalCount: 3 },
    { id: 3, name: 'Germany', goldMedalCount: 0 },
    ]
  }

  handleIncrement = (countryId) => {
    const mutable = [...this.state.countries];
    const index = mutable.findIndex((c) => c.id === countryId);
    mutable[index].goldMedalCount += 1;
    this.setState({countries: mutable});
  }

  handleDecrement = (countryId) => {
    const mutable = [...this.state.countries];
    const index = mutable.findIndex((c) => c.id === countryId);

    if (mutable[index].goldMedalCount !== 0) {
      mutable[index].goldMedalCount -= 1;
    }
    
    this.setState({countries: mutable});
  }

  render() {
    return (
      <Countries countries={this.state.countries} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement}/>
    );
  }
}

export default App;
