import { Box, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import type { CatImage } from "./CatSlides";
import thumbsUp from "../assets/thumbs-up.png";

interface Props {
  favorites: CatImage[];
  onVoteClick: () => void;
}

const FavGrid = ({ favorites, onVoteClick }: Props) => {
  if (favorites.length === 0)
    return (
      <>
        <VStack>
          <Text fontSize="25px" fontWeight="bold" color="gray.500">
            You have no favs yet!
          </Text>

          <Box
            as="button"
            p={2}
            cursor="pointer"
            mt="30px"
            onClick={onVoteClick}
          >
            <Image src={thumbsUp} boxSize="25px"></Image>
          </Box>
          <Text fontSize="20px" color="pink.300" fontWeight="bold">
            Vote Now
          </Text>
        </VStack>
      </>
    );
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
