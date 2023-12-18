import React from 'react';
import {Movie} from "./Movie/Movie";
import styles from './Movies.module.css'

const Movies = ({movies}) => {
    return (
        <div className={styles.moviesWrap}>
            {movies.map((movie) => <Movie movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {Movies};