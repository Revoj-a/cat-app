import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import type { CatImage } from "./CatSlides";

interface Props {
  favorites: CatImage[];
}

const FavGrid = ({ favorites }: Props) => {
  if (favorites.length === 0) return <Text>No favorite cats</Text>;
  return (
    <SimpleGrid columns={[2, 3, 4]} gap={10} p={4}>
      {favorites.map((cat) => (
        <Box key={cat.id} borderRadius="md" overflow="hidden">
          <Image
            src={cat.url}
            alt={`Favorite Cat ${cat.id}`}
            objectFit="cover"
            width="100%"
            height="200px"
          />
        </Box>
      ))}
      ;
    </SimpleGrid>
  );
};

export default FavGrid;
