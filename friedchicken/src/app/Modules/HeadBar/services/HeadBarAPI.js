import * as dataService from "../../../utils/dataService";
import { Table } from "@material-ui/core";

const controller = {
    HeadBar: 'headbar',
    Cart:'cart'
}
export const makeNewCart = {

}
export const getAllCartByIdUser = (IdUser) => {
    return dataService.getFunction(controller.Cart, `getAllCartByIdUser?IdUser=${IdUser}`);
}
export const deleteProductInCart = (item) => {
    return dataService.postFunction(controller.Cart, 'deleteProductInCart', item);
}