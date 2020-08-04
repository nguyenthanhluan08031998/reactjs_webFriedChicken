import * as dataService from "../../../utils/dataService"

const controller = {
    Food: 'food',
    Cart:'cart'
}
export const getAllFood = () => {
    return dataService.getFunction(controller.Food, 'getAll');
}
export const addProductInCart =(item) =>{
    return dataService.postFunction(controller.Cart, 'addProductInCart', item);
}
