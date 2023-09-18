import { MotionContainer } from "@/components/motionContainer/MotionContainer";
import { IArticleSearchResponse } from "@/types/nytimes";
import { useDataFetch } from "@/hooks/useDataFetch";
import Error from "@/components/error/Error";
import Loader from "@/components/loader/Loader";
import Card from "@/components/card/Card";

import style from "@/styles/stylesGlobal.module.css";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Simulate } from "react-dom/test-utils";

const Articles = () => {
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState<string>("");

  const onSubmit = (data: FieldValues) => setQuery(data.query);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`;

  const { status, hookRes } = useDataFetch<IArticleSearchResponse>(
    URL,
    "articles",
    query
  );

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  const articles = hookRes?.response.docs;

  return (
    <MotionContainer>
      <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("query")} />
        <button type="submit">search</button>
      </form>
      <div className={style.grid_container}>
        {articles?.map((article, index) => (
          <Card article={article} key={index} />
        ))}
      </div>
    </MotionContainer>
  );
};

export default Articles;
