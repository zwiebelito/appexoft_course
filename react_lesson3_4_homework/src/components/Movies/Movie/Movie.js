import React, {useEffect, useState} from 'react';
import {picture} from "../../../constants/urls";
import styles from './Movie.module.css'
import {useFavourite} from "../../../hooks/useFavourite";

const Movie = ({movie}) => {
    const { title, vote_average, poster_path, release_date } = movie;
    const {isAddedToFavorites, addToFavorites} = useFavourite(movie);


    const date = new Date(release_date).getFullYear()

    const changedVoteAverage = vote_average.toString()

    return (
        <div className={styles.main}>
           <div>
               <img className={styles.poster} src={poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : `${picture}`} alt={title}/>
           </div>
            <div className={styles.title}>
                <h2>{title.length < 40 ? title : `${title.slice(0, 40)}...`}</h2>
            </div>
            <div className={styles.date}>
                <p>{release_date ? date : 'No info'}</p>
            </div>
            <div className={[styles.rating, vote_average > 7 ? styles.good: styles.bad].join(' ')}>
                <p>{changedVoteAverage.length === 1 ? `${changedVoteAverage}.0` : changedVoteAverage}</p>
            </div>
            <button onClick={addToFavorites} disabled={isAddedToFavorites}>
                {isAddedToFavorites ? 'Added to Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
};

export {Movie};