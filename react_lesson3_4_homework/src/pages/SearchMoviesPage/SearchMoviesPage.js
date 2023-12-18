import React from 'react';

import {Movies} from "../../components/Movies/Movies";

const SearchMoviesPage = () => {
   const movies =  JSON.parse(localStorage.getItem('movies')) || [];

    return (
        <div>
            {movies && <Movies movies={movies}/>}
        </div>
    );
};

export {SearchMoviesPage};
