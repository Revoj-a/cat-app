import { Box, Grid } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CatSlides, { type CatImage } from "./components/CatSlides";
import { useState } from "react";
import IconBar from "./components/IconBar";
import useCats from "./hooks/useCats";
import FavGrid from "./components/FavGrid";
import CatBreeds from "./components/CatBreeds";
import useBreeds from "./hooks/useBreeds";

function App() {
  const [view, setView] = useState<"vote" | "breed" | "favs">("vote");
  const [favorites, setFavorites] = useState<CatImage[]>([]);
  const { cats, error, currentIndex, loading, handleNextImage } = useCats();
  const { breeds, breedsError, breedsLoading } = useBreeds("");

  const handleHeartClick = () => {
    const currentCat = cats[currentIndex];

    if (currentCat && !favorites.some((f) => f.id === currentCat.id)) {
      setFavorites([...favorites, currentCat]);
    }
    handleNextImage();
  };

  return (
    <Box bg="white" minH="100vh">
      <Grid
        templateAreas={{
          base: `'nav' 'content' 'bottom'`,
          lg: `'nav' 'content' 'bottom'`,
        }}
        gridTemplateRows="90px 1fr 60px"
        height="100vh"
        gap={4}
      >
        <Box
          gridArea="nav"
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={4}
        >
          <NavBar
            onVoteClick={() => setView("vote")}
            onFavClick={() => setView("favs")}
            onBreedClick={() => setView("breed")}
          />
        </Box>
        <Box
          gridArea="content"
          bg="white"
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {view === "vote" && (
            <CatSlides
              cats={cats}
              error={error}
              loading={loading}
              currentIndex={currentIndex}
            />
          )}
          {view === "favs" && <FavGrid favorites={favorites}></FavGrid>}
          {view === "breed" && (
            <CatBreeds
              breeds={breeds}
              error={breedsError}
              loading={breedsLoading}
            ></CatBreeds>
          )}
        </Box>
        {view === "vote" && (
          <Box
            gridArea="bottom"
            bg="white"
            display="flex"
            color="black"
            alignItems="center"
            justifyContent="center"
          >
            <IconBar onHeartClick={handleHeartClick} />
          </Box>
        )}
      </Grid>
    </Box>
  );
}

export default App;
