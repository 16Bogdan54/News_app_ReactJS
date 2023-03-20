import { MotionContainer } from "@/components/motionContainer/MotionContainer";
import { useDataFetch } from "@/hooks/useDataFetch";
import { IMostPopularArticle, IMostPopularResponse } from "@/types/nytimes";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import { MostPopularCard } from "@/components/mostPopularCard/MostPopularCard";

import style from "@/styles/stylesGlobal.module.css";

const MostPopular = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${API_KEY}`;

  const { status, hookRes } = useDataFetch<IMostPopularResponse>(
    URL,
    "mostPopular"
  );

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  const mostPopular = hookRes?.results;

  mostPopular?.forEach((article: IMostPopularArticle) => {
    console.log(article.media[0]?.["media-metadata"][0]?.url);
  });

  return (
    <MotionContainer>
      <div className={style.grid_container}>
        {mostPopular?.map((article, index) => (
          <MostPopularCard article={article} key={index} />
        ))}
      </div>
    </MotionContainer>
  );
};

export default MostPopular;
