import * as dataService from "../../../utils/dataService"

const controller = {
    Register: 'register'
}
export const makeNewItem = {
    Id:0,
    Username: '',
    Password: '',
    Image:'',
    IdRole: 1
}
export const register = (user) => {
    return dataService.postFunction(controller.Register, `add`, user)
}
export const updateUser = (user) => {
    return dataService.postFunction(controller.Register, `update`, user)
}