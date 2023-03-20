import { Navbar } from "@/components/navbar/Navbar";
import axios from "axios";
import { AnimatedRoutes } from "@/routes/AnimatedRoutes";
import { MotionContainer } from "@/components/motionContainer/MotionContainer";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  // axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${API_KEY}`).then(data => console.log('movie reviews', data))
  // axios.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`).then(data => console.log('top stories', data))

  return (
    <MotionContainer>
      <Navbar />
      <AnimatedRoutes />
    </MotionContainer>
  );
}

export default App;
