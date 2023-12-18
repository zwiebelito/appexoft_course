import React, {useEffect} from 'react';
import {Movies} from "../../components/Movies/Movies";
import {useMovies} from "../../hooks/useMovies";
import {Pagination} from "../../components/Pagination/Pagination";
import {Sorting} from "../../components/Sorting/Sorting";
import styles from './MoviesPage.module.css'

const MoviesPage = () => {
    const {
        page, totalPages, setSortCriterion, setPage, setSelectedGenre, genres,
        movies, selectedGenre, sortCriterion} = useMovies()

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleSortChange = (event) => {
        setSortCriterion(event.target.value);
    };

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value === 'all' ? null : event.target.value);
    };

    return (
        <div>
            <span className={styles.page}>Page: {page}</span>
            <Sorting handleSortChange={handleSortChange} handleGenreChange={handleGenreChange}
                     genres={genres} selectedGenre={selectedGenre} sortCriterion={sortCriterion}/>
            <Movies movies={movies}/>
            <Pagination handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} page={page} totalPages={totalPages}/>
        </div>
    );
};

export {MoviesPage};