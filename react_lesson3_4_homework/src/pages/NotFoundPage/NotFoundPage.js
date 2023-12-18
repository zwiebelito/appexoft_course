import React from 'react';
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={styles.not}>
            This page doesn't exist, try again!
        </div>
    );
};

export {NotFoundPage};