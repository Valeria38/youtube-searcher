import { useSelector } from "react-redux";

import Container from "../Container";
import SearchInput from "../SearchInput";
import VideosList from "../VideosList";
import PopularVideosList from "../PopularVideosList";

import { getQuery } from "../../selectors";

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
