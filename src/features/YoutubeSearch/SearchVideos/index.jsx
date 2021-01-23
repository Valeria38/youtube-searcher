import { useSelector } from "react-redux";

import Container from "../../Common/Container";
import SearchInput from "./components/SearchInput";
import VideosList from "./components/VideosList";
import PopularVideosList from "./components/PopularVideosList";

import { getQuery } from "./selectors";

const SearchVideos = () => {
  const query = useSelector(getQuery);

  return (
    <Container>
      <SearchInput />
      {query ? <VideosList /> : <PopularVideosList />}
    </Container>
  );
};

export default SearchVideos;
