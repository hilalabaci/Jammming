import Button from "./components/Button";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ListContainer from "./components/ListContainer";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Tracklist from "./components/Tracklist";
import { ListWrapper, SearchContainer } from "./styles";

function App() {
  return (
    <Layout>
      <Header />
      <SearchContainer>
        <SearchBar />
        <Button backgroundColor="#000934" text="Search" />
      </SearchContainer>
      <ListWrapper>
        <SearchResults/>
        <Tracklist/>
      </ListWrapper>
    </Layout>
  );
}

export default App;
