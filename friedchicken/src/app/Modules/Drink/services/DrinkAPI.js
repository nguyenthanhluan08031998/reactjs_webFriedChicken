import * as dataService from "../../../utils/dataService"

const controller = {
    Drink: 'drink'
}
export const getAllDrink = () => {
    return dataService.getFunction(controller.Drink, '/drink');
}