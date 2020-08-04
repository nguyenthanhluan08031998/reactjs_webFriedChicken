import { Grid, Paper } from '@material-ui/core'
import React from 'react';
import iframe from 'react-iframe'
import { makeStyles } from '@material-ui/core/styles';//css
import styles from '../styles/Store.style';//css

function Store() {
    return (
        <Grid style={{marginTop:80}}> 
            <Paper>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d125412.4809792727!2d106.633874171095!3d10.800585359023472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spopeyes!5e0!3m2!1svi!2s!4v1593867807853!5m2!1svi!2s" width="100%" height={700} frameborder fullscreenaria-hidden="false" tabindex="0"></iframe>
            </Paper>
        </Grid>
    )
}
export default Store;