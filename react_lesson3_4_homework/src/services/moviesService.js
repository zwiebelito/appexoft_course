import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const moviesService = {
    getAll: (sort, page, genre) => axiosService.get(urls.movies, {params: {sort_by: sort, page: page, with_genres: genre}}),
    getSearch: (query, page) => axiosService.get(urls.search, {params: {query: query, page: page}})
}

export {moviesService}