import { Box, Grid } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CatSlides from "./components/CatSlides";
import { useState } from "react";
import IconBar from "./components/IconBar";
import useCats from "./hooks/useCats";

function App() {
  const [showCats, setShowCats] = useState(false);
  const { cats, error, currentIndex, loading, handleNextImage } = useCats();
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
          <NavBar onVoteClick={() => setShowCats(true)} />
        </Box>
        <Box
          gridArea="content"
          bg="white"
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {showCats && (
            <CatSlides
              cats={cats}
              error={error}
              loading={loading}
              currentIndex={currentIndex}
            />
          )}
        </Box>
        <Box
          gridArea="bottom"
          bg="white"
          display="flex"
          color="black"
          alignItems="center"
          justifyContent="center"
        >
          <IconBar onHeartClick={handleNextImage} />
        </Box>
      </Grid>
    </Box>
  );
}

export default App;
