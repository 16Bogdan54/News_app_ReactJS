import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

const Articles = lazy(() => import('@/pages/articles/Articles'))
const MostPopular = lazy(() => import('@/pages/mostPopular/MostPopular'))
const MovieReviews = lazy(() => import('@/pages/movieReviews/MovieReviews'))
const TopStories = lazy(() => import('@/pages/topStories/TopStories'))

export const AnimatedRoutes = () => {

    return (
        <AnimatePresence>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={<Articles/>}/>
                    <Route path="/most-popular" element={<MostPopular/>}/>
                    <Route path="/movie-reviews" element={<MovieReviews/>}/>
                    <Route path="/top-stories" element={<TopStories/>}/>
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
};