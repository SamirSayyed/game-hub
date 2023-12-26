import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Show,
  interactivity,
} from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
      <GameGrid />
    </Grid>
  );
}

export default App;

// git init
// git add .
// git commit -m "First Commit"
// git log-online
// npm i react-icons@4.7.1
//
