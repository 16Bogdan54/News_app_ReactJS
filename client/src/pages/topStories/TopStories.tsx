import { MotionContainer } from "@/components/motionContainer/MotionContainer";
import { useDataFetch } from "@/hooks/useDataFetch";
import { ITopStoriesResponse } from "@/types/nytimes";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import style from "@/styles/stylesGlobal.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const TopStories = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`;

  const { status, hookRes } = useDataFetch<ITopStoriesResponse>(
    URL,
    "topStories"
  );

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  const stories = hookRes?.results;

  return (
    <MotionContainer>
      <div className={style.grid_container}>
        {stories?.map((story) => (
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {story.title}
              </h5>
            </a>
            <p className="text-sm text-gray-900 dark:text-white">
              By {story.byline}
            </p>
            <p className="text-xs text-gray-900 dark:text-white">
              {story.published_date}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {story.abstract}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <AiOutlineArrowRight className="ml-2 text-xl" />
            </a>
          </div>
        ))}
      </div>
    </MotionContainer>
  );
};

export default TopStories;
