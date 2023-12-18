import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Search} from "../Search/Search";

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.links}>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/favourites'}>Favourites</NavLink>
            </div>
            <div>
                <Search />
            </div>
        </div>
    );
};

export {Header};