import { MotionContainer } from "@/components/motionContainer/MotionContainer";
import { useDataFetch } from "@/hooks/useDataFetch";
import { IMovieReviewResponse } from "@/types/nytimes";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const MovieReviews = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${API_KEY}`;

  const { status, hookRes } = useDataFetch<IMovieReviewResponse>(
    URL,
    "movieReviews"
  );

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  const reviews = hookRes?.results;

  return (
    <MotionContainer>
      <h1>MovieReviews</h1>
    </MotionContainer>
  );
};

export default MovieReviews;

// {
//     "data": {
//     "status": "OK",
//         "copyright": "Copyright (c) 2023 The New York Times Company. All Rights Reserved.",
//         "has_more": false,
//         "num_results": 10,
//         "results": [
//         {
//             "display_title": "The Black Godfather",
//             "mpaa_rating": "TV-MA",
//             "critics_pick": 0,
//             "byline": "BEN KENIGSBERG",
//             "headline": "‘The Black Godfather’ Review: The Music Executive Who Made It All Happen",
//             "summary_short": "Reginald Hudlin’s documentary about Clarence Avant includes many golden anecdotes.",
//             "publication_date": "2019-06-06",
//             "opening_date": "2019-06-07",
//             "date_updated": "2019-06-14 16:44:01",
//             "link": {
//                 "type": "article",
//                 "url": "https://www.nytimes.com/2019/06/06/movies/the-black-godfather-review.html",
//                 "suggested_link_text": "Read the New York Times Review of The Black Godfather"
//             },
//             "multimedia": {
//                 "type": "mediumThreeByTwo210",
//                 "src": "https://static01.nyt.com/images/2019/06/05/arts/blackgodfather1/blackgodfather1-mediumThreeByTwo210.jpg",
//                 "height": 140,
//                 "width": 210
//             }
//         }
//     ]
// },
//     "status": 200,
//     "statusText": "OK",
//     "headers": {
//     "cache-control": "private",
//         "content-type": "application/json; charset=utf-8"
// },
//     "config": {
//     "transitional": {
//         "silentJSONParsing": true,
//             "forcedJSONParsing": true,
//             "clarifyTimeoutError": false
//     },
//     "adapter": [
//         "xhr",
//         "http"
//     ],
//         "transformRequest": [
//         null
//     ],
//         "transformResponse": [
//         null
//     ],
//         "timeout": 0,
//         "xsrfCookieName": "XSRF-TOKEN",
//         "xsrfHeaderName": "X-XSRF-TOKEN",
//         "maxContentLength": -1,
//         "maxBodyLength": -1,
//         "env": {},
//     "headers": {
//         "Accept": "application/json, text/plain, */*"
//     },
//     "method": "get",
//         "url": "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=Q3hOcpgVhyEZxQzucxCRqlNBa59SRhxX"
// }
// }
