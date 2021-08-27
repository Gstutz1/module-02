import React, {Component} from 'react'
import Country from './Country'

class Countries extends Component {
    render() {
        const {countries, handleIncrement, handleDecrement} = this.props;
        return (
            <React.Fragment>
                {countries.map(country => <Country handleIncrement={handleIncrement} handleDecrement={handleDecrement} 
                key={country.id} country={country}/>)}
            </React.Fragment>
        )
    }
}

export default Countries;