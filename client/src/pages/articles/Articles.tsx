import { MotionContainer } from "@/components/motionContainer/MotionContainer";
import { IArticleSearchResponse } from "@/types/nytimes";
import { useDataFetch } from "@/hooks/useDataFetch";
import Error from "@/components/error/Error";
import Loader from "@/components/loader/Loader";
import Card from "@/components/card/Card";

import style from "@/styles/stylesGlobal.module.css";

const Articles = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${API_KEY}`;

  const { status, hookRes } = useDataFetch<IArticleSearchResponse>(
    URL,
    "articles"
  );

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  const articles = hookRes?.response.docs;

  return (
    <MotionContainer>
      <div className={style.grid_container}>
        {articles?.map((article) => (
          <Card article={article} />
        ))}
      </div>
    </MotionContainer>
  );
};

export default Articles;
