import React, {useEffect, useState} from 'react';
import {Movies} from "../../components/Movies/Movies";

const FavouritesPage = () => {
    const [movies, setMovies] = useState([])
    const [deleted, isDeleted] = useState(false)

    useEffect(() => {
        const fav = localStorage.getItem('Favourite');
        if (fav) {
            setMovies(JSON.parse(fav));
        }
    }, [deleted]);

 if (movies.length > 0) {
     return (
         <div>
             <Movies movies={movies} deleted={deleted} isDeleted={isDeleted}/>
         </div>
     );
 } else {
     return (
         <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh',
             color: 'darkslateblue', fontSize: '24px', fontWeight: '500'}}>
             Please, choose some movies to your Favourite List
         </div>
     )
 }

};

export {FavouritesPage};