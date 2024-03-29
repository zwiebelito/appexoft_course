const baseURL = 'https://api.themoviedb.org/3';
const picture = 'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmU4MWYyYjRlYzU3OWNhNWVhNGNjYzlmZDZiZjEwYyIsInN1YiI6IjY0YmY4NjI2OGVlNDljMGZjYWY3Y2NmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Qz7o1zsdySVFlZLTmpqxcwfv632G-tHt802SL-_i_s'

const movies = '/discover/movie';
const genres = 'genre/movie/list'
const search = 'search/movie'

const options = [
    {
        id: 'popularity.desc',
        title: 'The most popular'
    },
    {
        id: 'popularity.asc',
        title: 'The less popular'
    },
    {
        id: 'vote_average.desc',
        title: 'Excellent rating'
    },
    {
        id: 'vote_average.asc',
        title: 'Poor rating'
    },
    {
        id: 'primary_release_date.desc',
        title: 'The newest'
    },
    {
        id: 'primary_release_date.asc',
        title: 'The oldest'
    }
];

const urls = {
    movies,
    genres,
    search,
    options
}

export {
    urls,
    token,
    baseURL,
    picture
}