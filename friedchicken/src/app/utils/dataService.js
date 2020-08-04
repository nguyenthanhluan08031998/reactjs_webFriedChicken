
import axios from "axios";
import { APIPort } from "./Port";
//import store from "@/store/redux";
// import { setLoading } from "@/store/redux/loading/loadingActions"

const APIUrl = `http://localhost:${APIPort}/api/`

export const getAll = (url, method) => {
    var configHTTP = {
        url: `${APIUrl}${url}/`,
        method,
    };
    return axios(configHTTP)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error)
            return null
        });
}

// export const getAllPaging = (url, e) => {
//     numberOfAjaxCAllPending++;
//     var params = Object.keys(e).map(key => `${key}=${e[key]}`).join('&');

//     var configHTTP = {
//         url: `${APIUrl}${url}/getPage?${params}`,
//         method: "GET",
//     };
//     return axios(configHTTP)
//         .then((response) => {
//             return response.data;
//         })
//         .catch((error) => {
//             console.log(error)
//             return null
//         });
// }

// export const addOrUpdate = (url, data) => {
//     numberOfAjaxCAllPending++;
//     var configHTTP = {
//         url: `${APIUrl}${url}/addOrUpdate`,
//         method: 'POST',
//         data,
//     };
//     return axios(configHTTP)
//         .then((response) => {
//             return response.data;
//         })
//         .catch((error) => {
//             console.log(error)
//             return null
//         });
// }

// export const getParams = (url, e) => {
//     numberOfAjaxCAllPending++;
//     var configHTTP = {
//         url: `${APIUrl}${url}/${e}`,
//         method: "GET",
//     };
//     return axios(configHTTP)
//         .then((response) => {
//             return response.data;
//         })
//         .catch((error) => {
//             console.log(error)
//             return null
//         });
// }

export const getFunction = (url, func) => {
    //numberOfAjaxCAllPending++;
    var configHTTP = {
        url: `${APIUrl}${url}/${func}`,
        method: 'GET',
    };
    return axios(configHTTP)
        .then((response) => {
            // store.dispatch(setLoading(false));
            return response.data;
        })
        .catch((error) => {
            // store.dispatch(setLoading(false));
            console.log(error)
            return null
        });
}

export const postFunction = (url, func, data) => {
    //numberOfAjaxCAllPending++;
    var configHTTP = {
        url: `${APIUrl}${url}/${func}`,
        method: 'POST',
        data
    };
    return axios(configHTTP)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error)
            return null
        });
}

export const getURLParamsKey = (url, key) => {
    let params = new URLSearchParams(url);
    return params.get(key);
};


// var numberOfAjaxCAllPending = 0;

// // Add a request interceptor
// axios.interceptors.request.use(
//     function (config) {
//         if (numberOfAjaxCAllPending > 0) {
//             store.dispatch(setLoading(true));
//         }
//         return config;
//     },
//     function (error) {
//         numberOfAjaxCAllPending = 0;
//         store.dispatch(setLoading(false));
//         return Promise.reject(error);
//     }
// );

// // Add a response interceptor
// axios.interceptors.response.use(
//     function (response) {
//         if (numberOfAjaxCAllPending > 0) {
//             numberOfAjaxCAllPending--;
//         }
//         //console.log("Respone left >>>", numberOfAjaxCAllPending);
//         if (numberOfAjaxCAllPending <= 0) {
//             store.dispatch(setLoading(false));
//         }
//         return response;
//     },
//     function (error) {
//         numberOfAjaxCAllPending = 0;
//         store.dispatch(setLoading(false));
//         return Promise.reject(error);
//     }
// );