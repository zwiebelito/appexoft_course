import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const genresService = {
    getGenres: () => axiosService.get(urls.genres)
}

export {genresService}