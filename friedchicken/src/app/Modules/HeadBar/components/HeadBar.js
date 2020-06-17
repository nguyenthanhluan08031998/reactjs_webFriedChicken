import React from 'react';
import { makeStyles } from '@material-ui/core/styles';//css
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from '../styles/HeadBar.style';//css
import { Grid, Box } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useItem } from '../hooks/HeadBarHook';

const useStyles = makeStyles(styles);
const HeadBar = (props) => {
    const { submitFailes, history, location, initialize, handleSubmit, notification } = props;
    const {
        valueBottomNavigation,
        OnChangeBottomNavigation
    } = useItem({history})
    //const [value, setValue] = React.useState(0);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.AppBar}>
                <Toolbar variant="dense">
                    <Grid container>
                        <Grid item xs={3}>
                        </Grid>
                        <Grid container item xs={6}>
                            <BottomNavigation
                                style={{ fontSize: 16, }}
                                value={valueBottomNavigation}
                                onChange={OnChangeBottomNavigation}
                                showLabels
                                className={classes.BottomNavigation}
                            >
                                <BottomNavigationAction className={classes.BottomNavigationAction} label="Trang Chủ" icon={<RestoreIcon />} />
                                <BottomNavigationAction label="Đồ Ăn" icon={<FavoriteIcon />} />
                                <BottomNavigationAction label="Đồ Uống" icon={<LocationOnIcon />} />
                                <BottomNavigationAction label="Cửa Hàng" icon={<LocationOnIcon />} />
                                <BottomNavigationAction label="Giới Thiệu" icon={<LocationOnIcon />} />
                            </BottomNavigation>
                        </Grid>
                        <Grid item xs={3}>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default HeadBar;