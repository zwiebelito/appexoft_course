import React, {useEffect, useState} from 'react';

const useFavourite = (movie) => {

    const [isAddedToFavorites, setAddedToFavorites] = useState(() => {
        const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        return existingFavorites.some((fav) => fav.id === movie.id);
    });

    useEffect(() => {
        localStorage.setItem('favoritesState', JSON.stringify(isAddedToFavorites));
    }, [isAddedToFavorites]);

    const addToFavorites = () => {
        setAddedToFavorites((prev) => {
            const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const isAlreadyInFavorites = prev || existingFavorites.some((fav) => fav.id === movie.id);
            if (!isAlreadyInFavorites) {
                const updatedFavorites = [...existingFavorites, movie];
                localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
                return true;
            }
            return prev;
        });
    }

    const removeFromFavorites = () => {
        const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const updatedFavorites = existingFavorites.filter((fav) => fav.id !== movie.id);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setAddedToFavorites(false);
        /*window.location.reload()*/
    };


    return (
        {isAddedToFavorites, addToFavorites, removeFromFavorites}
    );
};

export {useFavourite};