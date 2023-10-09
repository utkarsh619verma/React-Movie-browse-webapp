import { Main } from "../mainbanner";
import { Row } from "../row";
import requests from "../Request";

// sending id in row tag for specifying which movie roll we are scrolling using the buttons

export function Home() {
  return (
    <div>
      <Main />
      <Row id="0" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row id="1" title="Popular" fetchURL={requests.requestPopular} />
      <Row id="2" title="Trending" fetchURL={requests.requestTrending} />
      <Row id="3" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row id="4" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
}
