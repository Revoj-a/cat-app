import { Box, HStack, Image, Spinner, Text } from "@chakra-ui/react";

export interface Breed {
  id: string;
  name: string;
  description: string;
  image?: { url: string };
}

interface Props {
  breeds: Breed[];
  error: string;
  loading: boolean;
  currentBreedIndex: number;
}

const CatBreeds = ({ breeds, error, loading, currentBreedIndex }: Props) => {
  if (loading) return <Spinner />;
  if (error) return <Text color="red.500">{error}</Text>;
  if (!breeds.length) return <Text>Loading...</Text>;

  const breed = breeds[currentBreedIndex] ?? breeds[0];

  return (
    <HStack>
      <Box />
      <Image
        src={breed.image?.url}
        alt={breed.name}
        boxSize="350px"
        borderRadius="md"
      />
      {breed && (
        <Box>
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

export default CatBreeds;
