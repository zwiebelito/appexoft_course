import React, {useState} from 'react';

const useData = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [genres, setGenres] = useState([])
    const [sortCriterion, setSortCriterion] = useState('popularity.desc');
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [query, setQuery] = useState('');
    return (
        {
            movies, setMovies, page, setPage, setTotalPages, totalPages, setSelectedGenre, setSortCriterion,
            selectedGenre, sortCriterion, genres, setGenres, query, setQuery
        }
    );
};

export {useData};