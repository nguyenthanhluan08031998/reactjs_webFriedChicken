import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core'
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Loading from '../../../../components/Loading/Loading';
const TableProduct = ({ data, onDeleteProduct, onUpdateProduct, onNewProduct,
    handleChangePage, handleChangeRowsPerPage, page, rowsPerPage, isLoad
}) => {
    const { ListGrid, TotalCount } = data
    return (
        <>{isLoad ? <Loading /> : <React.Fragment>
            <Grid>
                <Grid align="right" style={{ marginBottom: 10 }}>
                    <Button alignItems='right' variant="outlined" color="primary" onClick={onNewProduct}>Thêm món</Button>
                </Grid>
                <Paper>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">STT</TableCell>
                                    <TableCell align="center">Tên món</TableCell>
                                    <TableCell align="center">Hình ảnh</TableCell>
                                    <TableCell align="center">Giá (VNĐ)</TableCell>
                                    <TableCell align="center">Loại sản phẩm</TableCell>
                                    <TableCell align="center">Thông tin</TableCell>
                                    <TableCell align="center">Quản lí</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ListGrid.map((item, i) => (
                                    <TableRow key={i}>
                                        <TableCell align="center">{page * rowsPerPage + i + 1}</TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            {item.Name}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Grid align="center">
                                                <Avatar src={item.Image} />
                                            </Grid>
                                        </TableCell>
                                        <TableCell align="center">{item.Price}</TableCell>
                                        <TableCell align="center">{item.IdCategoryProduct}</TableCell>
                                        <TableCell align="center">{item.Info}</TableCell>
                                        <TableCell align="center">
                                            <label htmlFor="icon-button-file">
                                                <IconButton color="primary" aria-label="upload picture" component="span" onClick={onUpdateProduct.bind(this, item)}>
                                                    <BorderColorIcon />
                                                </IconButton>
                                                <IconButton color="secondary" aria-label="upload picture" component="span" onClick={onDeleteProduct.bind(this, item)}>
                                                    <DeleteForeverIcon />
                                                </IconButton>
                                            </label>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={TotalCount}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>

            </Grid>
        </React.Fragment>}
        </>
    );
}
export default TableProduct;