import {createBrowserRouter, Navigate} from "react-router-dom";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {MainLayout} from "./layouts/MainLayout";
import {FavouritesPage} from "./pages/FavouritesPage/FavouritesPage";
import {SearchMoviesPage} from "./pages/SearchMoviesPage/SearchMoviesPage";

const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFoundPage />
    },
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={'/movies'}/>
            },
            {
                path: '/movies',
                element: <MoviesPage/>
            },
            {
                path: '/favourites',
                element: <FavouritesPage/>
            },
            {
                path: '/search-movie',
                element: <SearchMoviesPage/>
            }
        ]
    }
])

export default router;