import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/Main.style';//css
import { Grid } from '@material-ui/core';
import { useItem } from '../hooks/ManagerProductHook';
import TableProduct from './TableProduct';
import ModalEdit from './ModalEdit';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(styles);


const Main = () => {
  const classes = useStyles();
  const { data, onDeleteProduct, onUpdateProduct,
    openModalEdit, setOpenModalEdit,
    onCancelModalEdit, onSaveModalEdit,
    onNewProduct, listCategoryProduct,
    valueTextFieldName,
    valueTextFieldPrice,
    valueImage,
    valueEdittorInfo,
    valueIdCategoryProduct,
    onChangeTextFieldName,
    disableInputImageProduct,
    onClickEditImageProduct,
    onChangeInputImageProduct,
    onChangeValueIdCategoryProduct,
    handleChangePage, handleChangeRowsPerPage, page, rowsPerPage,
    isLoad
  }
    = useItem();
  return (
    <Grid>
      <TableProduct data={data} onUpdateProduct={onUpdateProduct}
        onDeleteProduct={onDeleteProduct}
        onNewProduct={onNewProduct}
        handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page} rowsPerPage={rowsPerPage}
        isLoad={isLoad}
      ></TableProduct>
      <ModalEdit
        openModalEdit={openModalEdit}
        setOpenModalEdit={setOpenModalEdit}
        listCategoryProduct={listCategoryProduct}
        onSaveModalEdit={onSaveModalEdit}
        onCancelModalEdit={onCancelModalEdit}
        valueTextFieldName={valueTextFieldName}
        valueTextFieldPrice={valueTextFieldPrice}
        valueImage={valueImage}
        valueEdittorInfo={valueEdittorInfo}
        valueIdCategoryProduct={valueIdCategoryProduct}
        onChangeTextFieldName={onChangeTextFieldName}
        disableInputImageProduct={disableInputImageProduct}
        onClickEditImageProduct={onClickEditImageProduct}
        onChangeInputImageProduct={onChangeInputImageProduct}
        onChangeValueIdCategoryProduct={onChangeValueIdCategoryProduct}
      ></ModalEdit>
    </Grid >
  );
}
export default Main;