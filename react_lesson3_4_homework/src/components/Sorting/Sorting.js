import React from 'react';
import styles from './Sorting.module.css'

const Sorting = ({sortCriterion, selectedGenre, genres, handleSortChange, handleGenreChange}) => {
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
                    <option value="popularity.desc">Popularity Desc</option>
                    <option value="popularity.asc">Popularity Asc</option>
                    <option value="vote_average.desc">Vote Average Desc</option>
                    <option value="vote_average.asc">Vote Average Asc</option>
                    <option value="primary_release_date.desc">Release date Desc</option>
                    <option value="primary_release_date.asc">Release date Asc</option>
                </select>
            </div>
        </div>
    );
};

export {Sorting};