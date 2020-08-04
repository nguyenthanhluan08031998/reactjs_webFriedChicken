import React from 'react';
import ReactLoading from 'react-loading';
import {Grid} from '@material-ui/core'
const Loading = () => (
    <Grid align='center' style={{height: 350}}>
        <ReactLoading type ={'spin'} color= '#ff9933' style={{ marginTop: 200, height: 50, width: 50 }} />
    </Grid>

);

export default Loading;