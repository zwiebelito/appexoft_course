import React, {useEffect, useState} from 'react';
import {moviesService} from "../services/moviesService";

const useSearch = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(()=> {
        moviesService.getSearch(query)
            .then(({data}) => {
                setMovies(data.results)
                setTotalPages(data.total_pages);
            })
    }, [query])

    return (
        {query, setQuery, movies, setMovies, currentPage, setCurrentPage, totalPages, setTotalPages}
    );
};

export {useSearch};