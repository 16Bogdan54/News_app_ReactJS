import { MotionContainer } from "@/components/motionContainer/MotionContainer";
import { useDataFetch } from "@/hooks/useDataFetch";
import { IMovieReviewResponse } from "@/types/nytimes";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const MovieReviews = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${API_KEY}`;

  const { status, hookRes } = useDataFetch<IMovieReviewResponse>(
    URL,
    "movieReviews"
  );

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  const reviews = hookRes?.results;

  return (
    <MotionContainer>
      <h1>MovieReviews</h1>
    </MotionContainer>
  );
};

export default MovieReviews;
