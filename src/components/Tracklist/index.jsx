import React from "react";
import ListContainer from "../ListContainer";
import Track from "../Track";
import Button from "../Button";
import { TrackWrapper, ButtonWrapper } from "./styles";

function Tracklist(props) {
  const tracks = props.tracks.map((track) => {
    return (
      <Track
        key={track.id}
        title={track.title}
        subTitle={`${track.artist.name} | ${track.album.title}`}
        icon="-"
      />
    );
  });

  return (
    <ListContainer>
      <TrackWrapper>{tracks}</TrackWrapper>
      <ButtonWrapper>
        <Button text="Save to Spotify" backgroundColor="#5c35e5" />
      </ButtonWrapper>
    </ListContainer>
  );
}

export default Tracklist;
