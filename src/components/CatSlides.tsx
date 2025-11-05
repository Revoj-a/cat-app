import { Box, HStack, Image, Spinner, Text } from "@chakra-ui/react";

export interface CatImage {
  id: string;
  url: string;
  breeds?: { name: string; description: string }[];
}

interface Props {
  cats: CatImage[];
  error: string;
  loading: boolean;
  currentIndex: number;
}

const CatSlides = ({ cats, error, loading, currentIndex }: Props) => {
  if (loading) return <Spinner />;
  if (error) return <Text color="red.500">{error}</Text>;
  if (!cats.length) return <Text>Loading...</Text>;

  const currentCat = cats[currentIndex];
  const breed = currentCat.breeds?.[0];

  return (
    <HStack>
      <Box />
      <Image
        src={currentCat.url}
        alt={breed ? breed.name : `Cat ${currentCat.id}`}
        boxSize="350px"
        borderRadius="md"
      />

      {breed && (
        <Box maxW="400px">
          <Text fontSize="l" fontWeight="bold">
            {breed.name}
          </Text>
          <Text fontSize="md" color="gray.600">
            {breed.description}
          </Text>
        </Box>
      )}
    </HStack>
  );
};

export default CatSlides;
