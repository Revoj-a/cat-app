import { Box, Grid } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CatSlides from "./components/CatSlides";

function App() {
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
          <NavBar />
        </Box>
        <Box
          gridArea="content"
          bg="white"
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CatSlides></CatSlides>
        </Box>
        <Box
          gridArea="bottom"
          bg="gray"
          display="flex"
          color="black"
          alignItems="center"
          justifyContent="center"
        ></Box>
      </Grid>
    </Box>
  );
}

export default App;
