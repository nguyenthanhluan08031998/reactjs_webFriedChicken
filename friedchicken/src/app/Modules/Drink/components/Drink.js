import React from 'react';
import { makeStyles } from '@material-ui/core/styles';//css
import styles from '../styles/Drink.style';//css
import { Grid } from '@material-ui/core';
import { useItem } from '../hooks/DrinkHook';
import Card from '../../../../components/Card/Card';
import Loading from '../../../../components/Loading/Loading';

const useStyles = makeStyles(styles);
const Drink = (props) => {
    // const { submitFailes, history, location, initialize, handleSubmit, notification } = props;
    const {
        data,
        isLoad,
        onAddProductIntCart
    } = useItem()
    console.log(data)
    //const [value, setValue] = React.useState(0);
    const classes = useStyles();
    return (
        <>{isLoad ? <Loading /> : <React.Fragment>
            <Grid container spacing={3} className={classes.root}>
                {
                    data.map((item, i) => (
                        <Grid key={i} item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <Card item={item} onAddProductIntCart={onAddProductIntCart}></Card>
                        </Grid>
                    ))
                }
            </Grid>
        </React.Fragment>}</>
    );
}
export default Drink;