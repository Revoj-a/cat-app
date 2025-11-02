import { Box, HStack, Image, Spinner, Text } from "@chakra-ui/react";

export interface CatImage {
  id: string;
  url: string;
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

  return (
    <HStack>
      <Box />
      <Image
        src={currentCat.url}
        alt={`Cat ${currentCat.id}`}
        boxSize="350px"
        borderRadius="md"
      />
    </HStack>
  );
};

export default CatSlides;
