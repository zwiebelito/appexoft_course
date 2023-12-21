import React from 'react';
import styles from './Sorting.module.css'
import {urls} from "../../constants/urls";

const Sorting = ({sortCriterion, selectedGenre, genres, handleSortChange, handleGenreChange}) => {
    const options = urls.options;
    return (
        <div className={styles.filter}>
            <div className={styles.genre}>
                <label>Select genre: </label>
                <select id="genreDropdown" value={selectedGenre || 'all'} onChange={handleGenreChange}>
                    <option value="all">All Genres</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className={styles.sort}>
                <label>Sort by: </label>
                <select id="sortDropdown" value={sortCriterion} onChange={handleSortChange}>
                    {options.map(option => <option key={option.id} value={option.id}>{option.title}</option>)}
                </select>
            </div>
        </div>
    );
};

export {Sorting};