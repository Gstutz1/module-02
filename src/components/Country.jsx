import React, {Component} from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { Card, CardContent, Typography } from '@material-ui/core';

class Country extends Component {
    render() {
        const {country, handleIncrement, handleDecrement} = this.props;
        return (
            <div style={{ display:'flex', justifyContent:'center' }}>
                <Card className='Country'>
                    <CardContent>
                        <Typography variant='h6' className='CountryName'>{country.name}</Typography>
                        <Typography variant='body1'>Gold Medals: {country.goldMedalCount}</Typography>
                        <AddCircleOutlineIcon color='primary' onClick={() => handleIncrement(country.id)}></AddCircleOutlineIcon>
                        <RemoveCircleOutlineIcon color='primary' onClick={() => handleDecrement(country.id)}></RemoveCircleOutlineIcon>
                    </CardContent>
                </Card>
            </div>
            
        );
    }
}

export default Country;