import React, {useState} from 'react';

const useLoading = () => {
    const [loading, setLoading] = useState(true)
    return (
        {loading, setLoading}
    );
};

export {useLoading};