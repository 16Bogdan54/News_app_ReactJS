import { MotionContainer } from "@/components/motionContainer/MotionContainer";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

axios
  .get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`)
  .then((data) => console.log("top stories", data));

const TopStories = () => {
  return (
    <MotionContainer>
      <h1>TopStories</h1>
    </MotionContainer>
  );
};

export default TopStories;
