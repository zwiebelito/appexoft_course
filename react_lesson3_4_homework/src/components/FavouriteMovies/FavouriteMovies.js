import React from 'react';
import styles from './FavouriteMovies.module.css'
import {FavMovie} from "./FavMovie/FavMovie";

const FavouriteMovies = () => {
    const favMovies = JSON.parse(localStorage.getItem('favorites')) || []
    console.log(favMovies)

    if (favMovies.length > 0){
        return (
            <div className={styles.moviesWrap}>
                {favMovies.map((favMovie) => <FavMovie key={favMovie.id} favMovie={favMovie}/>)}
            </div>
        )
    } else {
        return (
            <div className={styles.noFav}>There are not any movies in your Favorite List</div>
        )
    }
};

export {FavouriteMovies};