import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

const Articles = lazy(() => import("@/pages/articles/Articles"));
const MostPopular = lazy(() => import("@/pages/mostPopular/MostPopular"));
const TopStories = lazy(() => import("@/pages/topStories/TopStories"));

const Login = lazy(() => import("@/pages/login/Login"));
const SignUp = lazy(() => import("@/pages/signup/SignUp"));

export const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/most-popular" element={<MostPopular />}>
            {/*<Route path="/most-popular/:id" element={} />*/}
          </Route>
          <Route path="/top-stories" element={<TopStories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};
