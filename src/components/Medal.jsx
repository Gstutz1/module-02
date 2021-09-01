import {Typography} from '@material-ui/core'

const Medal = ({medalType, medalCount}) => {
        return (
            <Typography variant='body1'>{medalType}s: {medalCount}</Typography>
        )
}

export default Medal;