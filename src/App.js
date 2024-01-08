import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ListContainer from "./components/ListContainer";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Tracklist from "./components/Tracklist";
import { ListWrapper, SearchContainer } from "./styles";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [trackList, setTrackList] = useState([]);

  const searchTracks = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search?q=${searchText}`
    );
    const jsonData = await response.json();
    setSearchResult(jsonData.data);
  };

  return (
    <Layout>
      <Header />
      <SearchContainer>
        <SearchBar onChange={setSearchText} />
        <Button
          backgroundColor="#000934"
          text="Search"
          onClick={searchTracks}
        />
      </SearchContainer>
      <ListWrapper>
        <SearchResults
          tracks={searchResult}
          addToTrackList={(track) => {
            setTrackList((prevTrackList) => {
              const exist = prevTrackList.some((t) => t.id === track.id);
              if (exist) {
                return prevTrackList;
              }
              return [track, ...prevTrackList];
            });
          }}
        />
        <Tracklist tracks={trackList} />
      </ListWrapper>
    </Layout>
  );
}

export default App;
