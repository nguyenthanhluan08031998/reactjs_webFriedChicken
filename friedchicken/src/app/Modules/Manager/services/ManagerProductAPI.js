import * as dataService from "../../../utils/dataService"
import { Table } from "@material-ui/core";

const controller = {
    ManagerProduct: 'managerproduct'
}
export const makeNewProduct ={
    Id: 0,
    Name:'',
    Price:0,
    Info:'',
    Image:'http://localhost:5001/image/imagedefault.png',
    IdCategoryProduct: 0,
}
export const getAll = () => {
    return dataService.getFunction(controller.ManagerProduct, 'getAll');
}
export const getAllPaging = (table, page, rowPerPage)=>{
    return dataService.getFunction(controller.ManagerProduct, `getAllPaging?table=${table}&page=${page}&rowPerPage=${rowPerPage}`)
}
export const getListCategoryProduct = () => {
    return dataService.getFunction(controller.ManagerProduct, 'getListCategoryProduct')
}
export const addProduct = (product) => {
    return dataService.postFunction(controller.ManagerProduct, 'addProduct', product);
}
export const deleteProduct = (product) => {
    return dataService.postFunction(controller.ManagerProduct, 'deleteProduct', product);
}
export const updateProduct = (product) => {
    return dataService.postFunction(controller.ManagerProduct, 'updateProduct', product)
}