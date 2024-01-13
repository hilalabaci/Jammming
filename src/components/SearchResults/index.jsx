import React from "react";
import ListContainer from "../ListContainer";
import { Title } from "./styles";
import Track from "../Track";

function SearchResults(props) {
  const tracks = props.tracks.map((track) => {
    return (
      <Track
        key={track.id}
        title={track.name}
        subTitle={`${track.artist} | ${track.album}`}
        icon="+"
        onAction={() => {
          props.addToTrackList(track)
        }}
      />
    );
  });

  return (
    <ListContainer>
      <Title>Results</Title>
      {tracks}
    </ListContainer>
  );
}

export default SearchResults;
