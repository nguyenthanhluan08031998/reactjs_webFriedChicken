import React from 'react';
import { makeStyles } from '@material-ui/core/styles';//css
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from '../styles/HeadBar.style';//css
import { Grid } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HomeIcon from '@material-ui/icons/Home';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

import { useItem } from '../hooks/HeadBarHook';

const useStyles = makeStyles(styles);
const HeadBar = (props) => {
    const { history } = props;
    const {
        valueBottomNavigation,
        onChangeBottomNavigation,
        onLogin
    } = useItem({ history })
    //const [value, setValue] = React.useState(0);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.AppBar}>
                <Toolbar variant="dense">
                    <Grid container>
                        <Grid item xs={3}>
                        </Grid>
                        <Grid container item xs={6} style={{ background: 'red', display: 'flex', justifyContent: 'space-around' }}>
                            <BottomNavigation
                                value={valueBottomNavigation}
                                onChange={onChangeBottomNavigation}
                                showLabels
                                className={classes.BottomNavigation}
                            >
                                <BottomNavigationAction className={classes.BottomNavigationAction} label="Trang Chủ" icon={<HomeIcon />} />
                                <BottomNavigationAction className={classes.BottomNavigationAction} label="Đồ Ăn" icon={<RestaurantIcon />} />
                                <BottomNavigationAction className={classes.BottomNavigationAction} label="Đồ Uống" icon={<FastfoodIcon />} />
                                <BottomNavigationAction className={classes.BottomNavigationAction} label="Cửa Hàng" icon={<LocationOnIcon />} />
                                <BottomNavigationAction className={classes.BottomNavigationAction} label="Giới Thiệu" icon={<ImportContactsIcon />} />
                            </BottomNavigation>
                        </Grid>
                        <Grid item xs={2} container alignContent='center' alignItems='center' style={{marginLeft:'100px'}}>
                            <label htmlFor="icon-button-file">
                                <IconButton color="Black" aria-label="upload picture" component="span"  onClick={onLogin}>
                                    <AccountCircleIcon style={{ height:'40px',width:'40px' ,fontSize:'large'}}/>
                                </IconButton>
                            </label>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default HeadBar;