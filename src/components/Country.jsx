import React, {Component} from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { Card, CardContent, Typography } from '@material-ui/core';
import { getCountryTotal } from '../services/CountryService';
import Medal from './Medal'

class Country extends Component {
    render() {
        const {country, handleIncrement, handleDecrement} = this.props;
        return (
            <div style={{display:'flex', justifyContent:'center'}}>
                <Card className='Country'>
                    <CardContent>
                        <Typography variant='h6' className='CountryName'>{country.name} - {getCountryTotal(country.id)}</Typography>
                        <Medal medalType='Gold Medal' medalCount={country.goldMedalCount}></Medal>
                        <AddCircleOutlineIcon color='primary' onClick={() => handleIncrement(country.id, 'gold')}/>
                        <RemoveCircleOutlineIcon color='primary' onClick={() => handleDecrement(country.id, 'gold')}/>
                        <Medal medalType='Silver Medal' medalCount={country.silverMedalCount}></Medal>
                        <AddCircleOutlineIcon color='primary' onClick={() => handleIncrement(country.id, 'silver')}/>
                        <RemoveCircleOutlineIcon color='primary' onClick={() => handleDecrement(country.id, 'silver')}/>
                        <Medal medalType='Bronze Medal' medalCount={country.bronzeMedalCount}></Medal>
                        <AddCircleOutlineIcon color='primary' onClick={() => handleIncrement(country.id, 'bronze')}/>
                        <RemoveCircleOutlineIcon color='primary' onClick={() => handleDecrement(country.id, 'bronze')}/>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Country;