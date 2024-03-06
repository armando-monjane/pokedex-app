import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./components/pages/home";
import PokemonDetailPage from "@components/pages/pokemon-detail";
import PokemonTypeListPage from "@components/pages/pokemon-type-list";

export const RouterMiddleware = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: '/pokemon/:id',
            element: <PokemonDetailPage />,
        },
        {
            path: "/type/:type",
            element: <PokemonTypeListPage />,
        },
        {
            path: "*",
            element: <h1>404</h1>,
        },
    ]);

    return <RouterProvider router={router} />;
};
