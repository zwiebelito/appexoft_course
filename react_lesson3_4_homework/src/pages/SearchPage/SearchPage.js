import React, {useEffect} from 'react';
import {useLocation} from "react-router";
import {Pagination} from "../../components/Pagination/Pagination";
import {useSearch} from "../../hooks/useSearch";
import {Movies} from "../../components/Movies/Movies";
import styles from './SearchPage.module.css'
import {moviesService} from "../../services/moviesService";
import {useLoading} from "../../hooks/useLoading";

const SearchPage = () => {
    const {state} = useLocation()
    const {query} = state.query;
    const {movies, setMovies, totalPages, setTotalPages, page, setPage} = useSearch()
    const {loading, setLoading} = useLoading()

    useEffect(()=> {
        if (query.trim() !== ''){
            moviesService.getSearch(query, page).then(({data}) => {
                setMovies(data.results)
                setTotalPages(data.total_pages)
                setLoading(false)
            })
        }
    }, [query, page])

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


    if (loading){
        return (
            <div className={styles.loading}>Loading...</div>
        )
    } else if (movies.length > 0){
        return (
            <div>
                <h2 className={styles.results}>Results of your search: '{query}'</h2>
                <Movies movies={movies}/>
                <Pagination totalPages={totalPages} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} page={page}/>
            </div>
        )
    } else {
        return (
            <div className={styles.main}>
                <h2 className={styles.none}>Nothing was found for your request "{query}"</h2>
            </div>
        )
    }
};

export {SearchPage};