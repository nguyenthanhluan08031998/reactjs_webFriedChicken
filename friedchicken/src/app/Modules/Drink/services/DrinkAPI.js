import * as dataService from "../../../utils/dataService"

const controller = {
    Drink: 'drink'
}
export const getAllDrink = () => {
    return dataService.getFunction(controller.Drink, 'getAll');
}
export const addProductInCart =(item) =>{
    return dataService.postFunction(controller.Cart, 'addProductInCart', item);
}