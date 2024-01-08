import React from "react";
import { Input } from "./styles";

function SearchBar(props) {
  return (
    <Input
      placeholder="Enter A Song Title"
      type="text"
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    />
  );
}

export default SearchBar;
