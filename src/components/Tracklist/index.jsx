import React from "react";
import ListContainer from "../ListContainer";
import Track from "../Track";
import Button from "../Button";
import { TrackWrapper, ButtonWrapper, PlayListName } from "./styles";

function Tracklist(props) {
  const tracks = props.tracks.map((track) => {
    return (
      <Track
        key={track.id}
        title={track.name}
        subTitle={`${track.artist} | ${track.album}`}
        icon="-"
        onAction={() => {
          props.deleteFromTrackList(track.id);
        }}
      />
    );
  });

  return (
    <ListContainer>
      <PlayListName
        type="text"
        onChange={props.onPlayListNameChange}
        value={props.playListName}
      />
      <TrackWrapper>{tracks}</TrackWrapper>
      <ButtonWrapper>
        <Button text="Save to Spotify" backgroundColor="#5c35e5" />
      </ButtonWrapper>
    </ListContainer>
  );
}

export default Tracklist;
