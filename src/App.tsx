import { Box, Grid } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="white" minH="100vh">
      <Grid
        templateAreas={{
          base: `'nav' 'content' 'bottom'`,
          lg: `'nav' 'content' 'bottom'`,
        }}
        gridTemplateRows="60px 1fr 60px"
        height="100vh"
        gap={4}
      >
        <Box
          gridArea="nav"
          bg="gray"
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={4}
        >
          Nav
        </Box>
        <Box
          gridArea="content"
          bg="white"
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Content
        </Box>
        <Box
          gridArea="bottom"
          bg="gray"
          display="flex"
          color="black"
          alignItems="center"
          justifyContent="center"
        >
          Bottom
        </Box>
      </Grid>
    </Box>
  );
}

export default App;
