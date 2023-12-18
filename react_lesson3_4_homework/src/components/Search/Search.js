import React from 'react';
import styles from './Search.module.css'

import {useSearch} from "../../hooks/useSearch";
import {useNavigate} from "react-router";

const Search = () => {
   const {query, setQuery, movies, setMovies, currentPage, setCurrentPage, totalPages, setTotalPages} = useSearch()
    const navigate = useNavigate()
    const handleSearch = () => {
       localStorage.clear()
        localStorage.setItem('movies', JSON.stringify(movies));
        const newMovies = JSON.parse(localStorage.getItem('movies'));
        navigate('/search-movie')
        window.location.reload()
    }

    return (
        <div className={styles.wrap}>
            <input type="text"
                   placeholder={'Enter the name of movie'}
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export {Search};