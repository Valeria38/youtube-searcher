import { useSelector } from "react-redux";

import SearchInput from "./components/SearchInput";
import VideosList from "./components/VideosList";
import PopularVideosList from "./components/PopularVideosList";

import { getQuery } from "./selectors";

const YoutubeSearch = () => {
  const query = useSelector(getQuery);
  return (
    <>
      <SearchInput />
      {query ? <VideosList /> : <PopularVideosList />}
    </>
  );
};

export default YoutubeSearch;
