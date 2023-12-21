import React, {useEffect, useState} from 'react';
import {genresService} from "../services/genresService";
import {useData} from "./useData";

const useSearch = () => {
    const { movies, setMovies, page, setPage, setTotalPages, totalPages, setSelectedGenre, setSortCriterion,
        selectedGenre, sortCriterion, genres, setGenres, query, setQuery} = useData()

    useEffect(() => {
        genresService.getGenres().then(({data}) => {
            setGenres(data.genres);
        })
    }, [])

    return (
        {query, setQuery, movies, setMovies, totalPages, setTotalPages, page, setPage, genres, setGenres, sortCriterion, setSortCriterion, selectedGenre, setSelectedGenre}
    );
};

export {useSearch};