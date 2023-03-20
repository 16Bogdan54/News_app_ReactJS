import { IMostPopularArticle } from "@/types/nytimes";
import { AiOutlineArrowRight } from "react-icons/ai";

import style from "./styles/styles.module.css";

type Props = {
  article: IMostPopularArticle;
};

export const MostPopularCard = ({ article }: Props) => {
  return (
    <div className={style.card}>
      <a href="#">
        <img
          className="rounded-t-lg w-full"
          src={`${article.media[0]?.["media-metadata"][2]?.url}`}
          alt="image"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className={style.heading}>{article.title}</h5>
        </a>
        <p className={style.date}>{article.published_date}</p>
        <p className={style.abstract}>{article.abstract}</p>
        <a href="#" className={style.read_more_btn}>
          Read more
          <AiOutlineArrowRight className="ml-2 text-xl" />
        </a>
      </div>
    </div>
  );
};
