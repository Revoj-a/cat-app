import useCats from "@/hooks/useCats";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

const CatSlides = () => {
  const { cats, error } = useCats();

  if (error) return <Text color="red.500">{error}</Text>;
  if (!cats.length) return <Text>Loading...</Text>;

  return (
    <HStack>
      {cats.map((cat) => (
        <Box key={cat.id}>
          <Image
            src={cat.url}
            alt={`Cat ${cat.id}`}
            boxSize="300px"
            objectFit="cover"
            borderRadius="md"
            mb={2}
          ></Image>
        </Box>
      ))}
    </HStack>
  );
};

export default CatSlides;
