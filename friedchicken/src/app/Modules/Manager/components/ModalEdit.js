import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Grid } from '@material-ui/core';
import { TextField, Avatar, Typography, Button, Paper } from '@material-ui/core';
import { Field, reduxForm } from "redux-form";
import RenderEditorField from "../../../../components/ReduxFormField/InputEditorField";
import Editor from 'react-html-editor';
import EditorStyles from 'react-html-editor';
import FieldEditor from '../../../../components/FieldEditor/FieldEditor'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import styles from '../styles/ModalEdit.style';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(styles);

export default function ServerModal({ openModalEdit, listCategoryProduct,
    onSaveModalEdit, onCancelModalEdit,
    onChangeTextFieldName, onChangeTextFieldPrice,
    valueTextFieldName, 
    valueTextFieldPrice, 
    valueImage, 
    valueIdCategoryProduct,
    valueEdittorInfo,
    onClickEditImageProduct,
    disableInputImageProduct,
    onChangeInputImageProduct,
    onChangeValueIdCategoryProduct
}) {
    console.log('valueTextFieldPrice',valueTextFieldPrice)
    const classes = useStyles();
    const [value, setValue] = React.useState();
    const [inputValue, setInputValue] = React.useState('');

    return (
        //<Grid className={classes.root}>
            <Modal
                open={openModalEdit}
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
            >
                <Grid className={classes.paper}>
                    <Typography align='center' style={{ fontSize: '2rem', marginBottom: 50 }}>Thông tin sản phẩm</Typography>
                    <Grid container>
                        <Grid item xs={4}>
                            <Paper align='center'>
                                <Avatar src={valueImage} variant="rounded" style={{ width: '250px', height: '220px' }}></Avatar>
                            </Paper>
                            <Grid align='center'>
                                <input accept="image/*" style={{ display: 'none' }} id="icon-button-file" type="file" disabled={disableInputImageProduct} onChange={onChangeInputImageProduct}/>
                                <label htmlFor="icon-button-file">
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera className={classes.iconCamera} onClick={onClickEditImageProduct} />
                                    </IconButton>
                                </label>
                            </Grid>
                        </Grid>
                        <Grid item xs={8} style={{ direction: 'column' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} style={{ marginLeft: 10 }}>
                                    <TextField fullWidth size='small' label="Tên món" type="search" variant="outlined" onChange={onChangeTextFieldName} value={valueTextFieldName} />
                                </Grid>
                                <Grid item xs={12} style={{ marginLeft: 10 }} container>
                                    <Grid item xs={6}>
                                        <TextField fullWidth size='small' label="Giá Tiền (VNĐ)" type="search" variant="outlined" onChange={onChangeTextFieldPrice} value={valueTextFieldPrice} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Autocomplete
                                            size='small'
                                            value={valueIdCategoryProduct}
                                            onChange={onChangeValueIdCategoryProduct}
                                            inputValue={inputValue}
                                            onInputChange={(event, newInputValue) => {
                                                setInputValue(newInputValue);
                                            }}
                                            options={listCategoryProduct}
                                            getOptionLabel={(option) => option.Name}
                                            renderInput={(params) => <TextField {...params} label="Loại sản phẩm" variant="outlined" />}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{ marginLeft: 10, marginTop: 10 }}>
                                    <FieldEditor ></FieldEditor>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid align="right">
                        <Button style={{ marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }}
                            variant="contained" color="primary"
                            onClick={onSaveModalEdit}> Lưu</Button>
                        <Button style={{ marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }}
                            variant="contained" color="secondary"
                            onClick={onCancelModalEdit}>Hủy</Button>
                    </Grid>
                </Grid>


            </Modal>
       // </Grid>
    );
}
