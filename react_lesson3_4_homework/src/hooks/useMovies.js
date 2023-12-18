import React, {useEffect, useState} from 'react';
import {moviesService} from "../services/moviesService";
import {genresService} from "../services/genresService";

const useMovies = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [genres, setGenres] = useState([])
    const [sortCriterion, setSortCriterion] = useState('popularity.desc');
    const [selectedGenre, setSelectedGenre] = useState(null);

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