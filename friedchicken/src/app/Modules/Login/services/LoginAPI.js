import * as dataService from "../../../utils/dataService"

const controller = {
    Login: 'login'
}
export const makeNewItem = {
    Id:0,
    Username: '',
    Password: '',
    Image:'',
    IdRole: 0
}
export const getUserByUsername = (username) =>{
    return dataService.getFunction(controller.Login, `getUserByUsername?username=${username}`)
}