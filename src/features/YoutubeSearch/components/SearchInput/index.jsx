import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDebounce } from "../../../../hooks/useDebounce";

import { setQuery as setQueryAction } from "../../actions";

import { getQuery } from "../../selectors";

import "./styles.scss";

const SearchInput = () => {
  const dispatch = useDispatch();
  const reduxQuery = useSelector(getQuery);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 700);

  useEffect(() => {
    dispatch(setQueryAction(debouncedQuery));
  }, [debouncedQuery]);

  useEffect(() => {
    reduxQuery && setQuery(reduxQuery);
  }, [reduxQuery]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <input
      className="input"
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search the video..."
      data-testid="search-input"
    />
  );
};

export default SearchInput;
