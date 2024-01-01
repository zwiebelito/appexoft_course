import React from 'react';
import styles from './Search.module.css'
import {useSearch} from "../../hooks/useSearch";
import {useNavigate} from "react-router";

const Search = () => {
    const {query, setQuery} = useSearch()
    const navigate = useNavigate()
    const handleSearch = () => {
       const search = {query: {query}}
        navigate('/search', { state: search });
    }

    return (
        <div className={styles.wrap}>
            <input type="text"
                   placeholder={'Enter the name of movie'}
                   value={query}
                   onChange={(e) => {
                       setQuery(e.target.value)
                   }}
            />
            <button disabled={query === ''} onClick={handleSearch}>Search</button>
        </div>
    );
};

export {Search};