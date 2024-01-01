import React, {useState} from 'react';
import {picture} from "../../../constants/urls";
import styles from './Movie.module.css'
import {useLocation} from "react-router";

const Movie = ({movie, deleted, isDeleted}) => {
    const { title, vote_average, poster_path, release_date } = movie;
    const [disable, setDisable] = useState(false)
    const [setDelete, setIsDelete] = useState(true)
    const date = new Date(release_date).getFullYear()

    const {pathname} = useLocation()

    const changedVoteAverage = vote_average.toString()

    const addToFav = () => {
        let favouriteMovies = localStorage.getItem("Favourite") ? JSON.parse(localStorage.getItem("Favourite")) : [];

        const isAlreadyAdded = favouriteMovies.some(fav => fav.id === movie.id);

        if (!isAlreadyAdded){
            localStorage.setItem("Favourite", JSON.stringify([...favouriteMovies, movie]));
            setDisable(!disable);
        }
    }

    const deleteFromFav = () => {
        let favouriteMovies = localStorage.getItem("Favourite") ? JSON.parse(localStorage.getItem("Favourite")) : [];
        favouriteMovies = favouriteMovies.filter(item => item.id !== movie.id);
        isDeleted(!deleted)
        setIsDelete(!setDelete)

        localStorage.setItem("Favourite", JSON.stringify([...favouriteMovies]));
    }



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
            <button onClick={pathname.includes("movies") || pathname.includes("search") ? addToFav : deleteFromFav}
                    disabled={disable}>{pathname.includes("movies") || pathname.includes("search") ? "Add to" : "Delete from"} favourites
            </button>
        </div>
    );
};

export {Movie};