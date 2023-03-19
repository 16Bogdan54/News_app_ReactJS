import { IArticle } from "@/types/nytimes";
import style from "./styles/style.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

type Props = {
  article: IArticle;
};

const Card = ({ article }: Props) => {
  return (
    <div className={style.card}>
      <a href="#">
        <h5 className={style.headline}>{article.headline.main}</h5>
      </a>
      {article.keywords && (
        <ul className={style.keywords}>
          {article.keywords.map((keyword, index) => {
            if (index === 5) {
              return (
                <li className="mr-2 md:mr-4" key={index}>
                  #{keyword.value}
                </li>
              );
            }
          })}
        </ul>
      )}
      <p className={style.abstract}>{article.abstract}</p>
      <a href="#" className={style.button}>
        Read more
        <AiOutlineArrowRight className="ml-2 text-xl" />
      </a>
    </div>
  );
};

export default Card;
