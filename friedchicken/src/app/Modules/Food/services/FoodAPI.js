import * as dataService from "../../../utils/dataService"

const controller = {
    Food: 'food'
}
export const getAllFood = () => {
    return dataService.getFunction(controller.Food, '/food');
}