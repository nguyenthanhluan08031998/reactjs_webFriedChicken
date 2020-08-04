import { useState, useEffect } from 'react';
import * as api from '../services/ManagerProductAPI';
import { useTheme } from '@material-ui/core';
export const useItem = (props) => {
    const [data, setData] = useState({
        ListGrid: [],
        TotalCount: 0
    });
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [productNew, setProductNew] = useState(api.makeNewProduct);
    const [listCategoryProduct, setListCategoryProduct] = useState([]);
    const [valueTextFieldName, setValueTextFieldName] = useState(null);
    const [valueTextFieldPrice, setValueTextFieldPrice] = useState(null);
    const [valueIdCategoryProduct, setValueIdCategoryProduct] = useState(null);
    const [valueImage, setValueImage] = useState(null);
    const [valueEdittorInfo, setValueEdittorInfo] = useState(null);
    const [disableInputImageProduct, setDisableInputImageProduct] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [isLoad, setIsLoad] = useState(true)
    async function getData() {
        let result = await api.getAllPaging('product', page, rowsPerPage)
        if (result) {
            setData(result)
        }
        setIsLoad(false)
    }
    useEffect(() => {
        getData();
    }, [page, rowsPerPage])
    async function getListCategoryProduct() {
        let result = await api.getListCategoryProduct();
        if (result) {
            setListCategoryProduct(result);
        }
    }
    useEffect(() => {
        getListCategoryProduct();
    }, [])
    const onNewProduct = async () => {
        setProductNew(api.makeNewProduct)
        setValueTextFieldName(api.makeNewProduct.Name)
        setValueTextFieldPrice(api.makeNewProduct.Price)
        setValueImage(api.makeNewProduct.Image)
        setValueEdittorInfo(api.makeNewProduct.Info)
        setValueIdCategoryProduct(api.makeNewProduct.IdCategoryProduct)
        setOpenModalEdit(true);
    }
    const onDeleteProduct = async (product) => {
        await api.deleteProduct(product);
        getData();
    }
    const onUpdateProduct = async (product) => {
        setProductNew(product)
        productNew.Id = product.Id
        setValueTextFieldName(product.Name)
        setValueTextFieldPrice(product.Price)
        setValueImage(product.Image)
        setValueEdittorInfo(product.Info)
        if (product.IdCategoryProduct == 1) {
            setValueIdCategoryProduct(listCategoryProduct[0])
        } else {
            if (product.IdCategoryProduct == 2) {
                setValueIdCategoryProduct(listCategoryProduct[1])
            }
        }
        setOpenModalEdit(true);
    }
    const onSaveModalEdit = async () => {
        productNew.Name = valueTextFieldName;
        productNew.Price = valueTextFieldPrice;
        productNew.Image = valueImage;
        productNew.IdCategoryProduct = valueIdCategoryProduct.Id;
        productNew.Info = valueEdittorInfo;
        if (productNew.Id == 0) {
            await api.addProduct(productNew)
        }
        else {
            await api.updateProduct(productNew)
        }
        getData()
        setOpenModalEdit(false)
    }
    const onCancelModalEdit = async () => {
        setOpenModalEdit(false)
    }
    const onChangeTextFieldName = (e) => {
        setValueTextFieldName(e.target.value)
    }
    const onClickEditImageProduct = () => {
        setDisableInputImageProduct(false)
    }
    const onChangeInputImageProduct = (e) => {
        let str1 = e.target.value.lastIndexOf('\\');
        let chuoi1 = e.target.value.slice(0, str1 + 1);
        let nameImage = e.target.value.replace(chuoi1, "");
        let linkImage = 'http://localhost:5001/image/' + nameImage;
        setValueImage(linkImage)
    }
    const onChangeValueIdCategoryProduct = (e, value) => {
        setValueIdCategoryProduct(value);
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return {
        data,
        listCategoryProduct,
        onNewProduct,
        onUpdateProduct,
        onDeleteProduct,
        openModalEdit,
        setOpenModalEdit,
        onSaveModalEdit,
        onCancelModalEdit,
        valueTextFieldName,
        valueTextFieldPrice,
        valueIdCategoryProduct,
        valueImage,
        valueEdittorInfo,
        onChangeTextFieldName,
        disableInputImageProduct,
        onClickEditImageProduct,
        onChangeInputImageProduct,
        onChangeValueIdCategoryProduct,
        handleChangePage, handleChangeRowsPerPage, page, setPage, rowsPerPage,
        isLoad
    }
}
