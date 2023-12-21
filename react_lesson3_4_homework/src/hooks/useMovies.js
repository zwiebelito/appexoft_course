import React, {useEffect, useState} from 'react';
import {moviesService} from "../services/moviesService";
import {genresService} from "../services/genresService";
import {useData} from "./useData";

const useMovies = () => {
   const {movies, setMovies, page, setPage, setTotalPages, totalPages, genres, setSelectedGenre, setSortCriterion,
       selectedGenre, sortCriterion, setGenres} = useData()

    useEffect(()=> {
        moviesService.getAll(sortCriterion, page, selectedGenre).then(({data}) => {
            setMovies(data.results)
            setTotalPages(data.total_pages)
        })
    }, [page, sortCriterion, selectedGenre])

    useEffect(() => {
        genresService.getGenres().then(({data}) => {
            setGenres(data.genres);
        })
    }, [])

    return (
        {
            movies, setMovies, page, setPage, setTotalPages, totalPages, genres, setSelectedGenre, setSortCriterion,
            selectedGenre, sortCriterion
        }
    );
};

export {useMovies};