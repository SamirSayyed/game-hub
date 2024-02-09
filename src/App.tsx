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
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelected from "./components/PlatformSelected";
import { Platforms } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platforms | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platforms | null>(
  //   null
  // );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelected
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid
          gameQuery={gameQuery}
          // selectedPlatform={gameQuery.platform}
          // selectedGenre={gameQuery.genre}
        />
      </GridItem>
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
