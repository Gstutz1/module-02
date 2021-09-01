import React, {Component} from 'react';
import {Typography} from '@material-ui/core'

class Medal extends Component {
    render() {
        const {medalType, medalCount} = this.props;
        return (
            <Typography variant='body1'>{medalType}s: {medalCount}</Typography>
        )
    }
}

export default Medal;