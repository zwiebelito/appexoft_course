import React from 'react';
import {useFavourite} from "../../../hooks/useFavourite";
import styles from './FavMovie.module.css'
import {picture} from "../../../constants/urls";

const FavMovie = ({favMovie}) => {
    const { title, vote_average, poster_path, release_date } = favMovie;
    const {isAddedToFavorites, removeFromFavorites} = useFavourite(favMovie);

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
            <button onClick={removeFromFavorites} disabled={!isAddedToFavorites}>
                {!isAddedToFavorites ? 'Removed from Favorites' : 'Remove from Favorites'}
            </button>
        </div>
    );
};

export {FavMovie};