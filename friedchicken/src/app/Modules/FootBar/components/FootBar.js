import React from 'react';
import { makeStyles } from '@material-ui/core/styles';//css
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from '../styles/FootBar.style';//css
import { Grid, Box } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(styles);
const FootBar = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container >
            <Grid item xs={12} sm={6} className={classes.footbar}>
                <Typography align='left'>Đặt hàng:</Typography>
                <Typography align='left'>Phản ánh dịch vụ:</Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.footbar}>
                <Typography align='left'>Điện Thoại:</Typography>
                <Typography align='left'>Email:</Typography>
                <Typography align='left'>Facebook:</Typography>
                <Typography align='left'>Youtube:</Typography>
            </Grid>
        </Grid>
    );
}
export default FootBar;