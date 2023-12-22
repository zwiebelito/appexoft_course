import React from 'react';
import {Movie} from "./Movie/Movie";
import styles from './Movies.module.css'

const Movies = ({movies, deleted, isDeleted}) => {
    return (
        <div className={styles.moviesWrap}>
            {movies && movies.map((movie) => <Movie movie={movie} key={movie.id} deleted={deleted} isDeleted={isDeleted}/>)}
        </div>
    );
};

export {Movies};