import React from 'react';
import styles from './Pagination.module.css'

const Pagination = ({page, totalPages, handleNextPage, handlePrevPage}) => {

    return (
        <div className={styles.buttons}>
            <button onClick={handlePrevPage} disabled={page === 1}>
                Previous Page
            </button>
            <span className={styles.pages}>Page {page} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={page === totalPages}>
                Next Page
            </button>
        </div>
    );
};

export {Pagination};