import React, {Component} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { Card, CardContent, Typography } from '@material-ui/core';

class Country extends Component {
    state = {
        name: 'United States',
        goldMedalCount: 0,
    }

    handleIncrement = () => {
        this.setState((prevState) => {
            return {goldMedalCount: prevState.goldMedalCount + 1}
        });
    }

    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography  variant='h6'>{this.state.name}</Typography>
                        Gold Medals: {this.state.goldMedalCount} <AddCircleIcon color='primary' onClick={this.handleIncrement}></AddCircleIcon>
                    </CardContent>
                </Card>
            </div>
            
        );
    }
}

export default Country;