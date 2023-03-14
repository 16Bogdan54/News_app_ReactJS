import {Navbar} from "@/components/navbar/Navbar";
import axios from "axios";
import {AnimatedRoutes} from "@/routes/AnimatedRoutes";
import {MotionContainer} from "@/components/motionContainer/MotionContainer";

function App() {

    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${import.meta.env.API_KEY}`).then(data => console.log('articles', data));
    axios.get(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${import.meta.env.API_KEY}`).then(data => console.log('most popular', data))
    axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${import.meta.env.API_KEY}`).then(data => console.log('movie reviews', data))
    axios.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${import.meta.env.API_KEY}`).then(data => console.log('top stories', data))

  return (
    <MotionContainer>
        <Navbar/>
        <AnimatedRoutes/>
    </MotionContainer>
  )
}

export default App
