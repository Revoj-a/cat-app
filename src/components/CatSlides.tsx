import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: Array<{ id: string; name: string }>;
}

const CatSlides = () => {
  const [cats, setCats] = useState<CatImage[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<CatImage[]>("/images/search?limit=10")
      .then((res) => setCats(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch the image");
      });
  }, []);

  if (error) return <Text color="red.500">{error}</Text>;
  if (!cats.length) return <Text>Loading...</Text>;

  return (
    <HStack>
      {cats.map((cat) => (
        <Box key={cat.id}>
          <Image
            src={cat.url}
            alt={`Cat ${cat.id}`}
            boxSize="200px"
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
