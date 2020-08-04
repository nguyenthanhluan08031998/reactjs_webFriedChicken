import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Grid, Button, Paper, Toolbar, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Loading from '../../components/Loading/Loading';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE 11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 600,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function ServerModal({ openCartDetail, dataCart, onDeleteProductInCart, onContinueShopping, onPay, isLoad }) {
    const classes = useStyles();
    const rootRef = React.useRef(null);

    return (
        <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open={openCartDetail}
            //open
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            className={classes.modal}
            container={() => rootRef.current}
        >
            <Grid>
                <Paper>
                    <Grid item xs={12}>
                        <Toolbar variant="dense" style={{ backgroundColor: '#ff9900', fontSize: 20 }}>GIỎ HÀNG</Toolbar>
                    </Grid>

                    <Grid item xs={12} style={{ marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 20, width: 800 }}>
                        <TableContainer component={Paper} style={{maxHeight:300}}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>STT</TableCell>
                                        <TableCell align="right">Hình ảnh</TableCell>
                                        <TableCell align="right">Tên món</TableCell>
                                        <TableCell align="right">Giá Tiền</TableCell>
                                        <TableCell align="right">Số Lượng</TableCell>
                                        <TableCell align="right">Thay đổi</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <>{isLoad ? <Loading /> : <React.Fragment>
                                        {dataCart.map((item, i) => (
                                            <TableRow >
                                                <TableCell component="th" scope="row">{i + 1}</TableCell>
                                                <TableCell align="right">
                                                    <Grid align="center">
                                                        <Avatar src={item.Image} />
                                                    </Grid>
                                                </TableCell>
                                                <TableCell align="right">{item.Name}</TableCell>
                                                <TableCell align="right">{new Intl.NumberFormat().format(item.Price)}</TableCell>
                                                <TableCell align="right">số lượng</TableCell>
                                                <TableCell align="right">
                                                    <IconButton color="secondary" aria-label="upload picture" component="span" onClick={onDeleteProductInCart.bind(this, item)}>
                                                        <DeleteForeverIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </React.Fragment>}</>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Tổng cộng : </Typography>
                    </Grid>
                    <Grid item xs={12} container>
                        <Grid item xs={6} align='right'>
                            <Button style={{ marginRight: 20, marginTop: 20, marginBottom: 20, width: 200 }} variant="contained" color="primary" onClick={onContinueShopping}>Tiếp tục mua hàng</Button>
                        </Grid>
                        <Grid item xs={6} align='left'>
                            <Button style={{ marginLeft: 20, marginTop: 20, marginBottom: 20, width: 200 }} variant="contained" color="secondary" onClick={onPay}>Thanh toán</Button>
                        </Grid>
                    </Grid>

                </Paper>
            </Grid>

        </Modal>
    );
}