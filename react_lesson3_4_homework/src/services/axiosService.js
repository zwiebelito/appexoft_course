import axios from "axios";
import {baseURL, token} from "../constants/urls";

const axiosService = axios.create({
    baseURL,
    headers:{
        accept: 'application/json',
        Authorization: token
    }
})

export {axiosService}
