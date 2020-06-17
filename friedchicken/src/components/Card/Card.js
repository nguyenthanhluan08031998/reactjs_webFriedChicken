import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        height: 360,
        marginTop: 40,
        marginBottom: 40,
    },
    media: {
        height: 240,
        width: "100%"
    },
    CardContent: {
        fontSize: 16,
    },
    Typography: {
        fontSize: 16,
        fontWeight: "Bold"
    },
    iconShopping: {
        height: "40px",
        width: "40px",
        fontSize: 'large',
    },
}));
export default function RecipeReviewCard({image, name, price}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={image}
                title="Paella dish"
            />
            <CardContent className={classes.CardContent}>
                <Typography className={classes.Typography} variant="body2" color="textSecondary" component="p" style={{color:'#ff9900'}}>
                    {name}
                </Typography>
                <Typography className={classes.Typography} variant="body2" color="textSecondary" component="p" style={{color:'#008000'}}>
                    {price}đ
                </Typography>
                <IconButton>
                    <ShoppingCartIcon className={classes.iconShopping} style={{color:'#cc3300'}}/>
                </IconButton>
            </CardContent>

        </Card>
    );
}