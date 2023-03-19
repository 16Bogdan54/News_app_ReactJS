import { MotionContainer } from "@/components/motionContainer/MotionContainer";
import { useDataFetch } from "@/hooks/useDataFetch";
import { IArticleSearchResponse } from "@/types/nytimes";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const MostPopular = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${API_KEY}`;

  const { status, hookRes } = useDataFetch<IArticleSearchResponse>(
    URL,
    "mostPopular"
  );

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  // const mostPopular = hookRes?.response.docs;

  return (
    <MotionContainer>
      <h1>MostPopular</h1>
    </MotionContainer>
  );
};

export default MostPopular;
