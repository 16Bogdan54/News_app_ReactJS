import { MotionContainer } from "@/components/motionContainer/MotionContainer";
import { useDataFetch } from "@/hooks/useDataFetch";
import { ITopStoriesResponse } from "@/types/nytimes";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

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

  console.log(stories);

  return (
    <MotionContainer>
      <h1>TopStories</h1>
    </MotionContainer>
  );
};

export default TopStories;
