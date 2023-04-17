import axios from "axios";

axios.defaults.baseURL = 'http://localhost:12000/'

export const apikey = "5f69909d2bc678f8d04c92acfda6d22937d0ec0ef00283b3785ce51c19ba9d3b"

export const http = {
     post : axios.post,
     get : axios.get,
     update : axios.put,
     delete : axios.delete
}