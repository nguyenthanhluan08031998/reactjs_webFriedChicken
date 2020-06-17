import React from 'react';
import { makeStyles } from '@material-ui/core/styles';//css
import styles from '../styles/Food.style';//css
import { Grid } from '@material-ui/core';
import { useItem } from '../hooks/FoodHook';
import Card from '../../../../components/Card/Card'
const useStyles = makeStyles(styles);
const Food = (props) => {
    // const { submitFailes, history, location, initialize, handleSubmit, notification } = props;
    const {
        data
    } = useItem()
    console.log(data)
    //const [value, setValue] = React.useState(0);
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            {
                data.map((item, i) => (
                    <Grid key={i} item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Card image={item.Image} name={item.Name} price={item.Price}></Card>
                    </Grid>
                ))
            }
        </Grid>
    );
}
export default Food;