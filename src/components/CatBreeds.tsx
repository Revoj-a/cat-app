import {
  Box,
  Image,
  NativeSelectField,
  NativeSelectIndicator,
  NativeSelectRoot,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import { useColorModeValue } from "./ui/color-mode";

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
}

const CatBreeds = ({ breeds, error, loading }: Props) => {
  const [currentBreedIndex, setCurrentBreedIndex] = useState(0);
  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("black", "white");

  if (loading) return <Spinner />;
  if (error) return <Text color="red.500">{error}</Text>;
  if (!breeds.length) return <Text>Loading...</Text>;

  const breed = breeds[currentBreedIndex] ?? breeds[0];

  return (
    <>
      <VStack>
        <NativeSelectRoot size="sm" width="400px">
          <NativeSelectField
            aria-label="Select Cat Breed"
            bg={bg}
            color={color}
            onChange={(e) => {
              const index = breeds.findIndex((b) => b.id === e.target.value);
              if (index >= 0) setCurrentBreedIndex(index);
            }}
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            {breeds.map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </NativeSelectField>
          <NativeSelectIndicator />
        </NativeSelectRoot>

        <Box />
        <Image
          src={breed.image?.url}
          alt={breed.name}
          objectFit="cover"
          boxSize="250px"
          borderRadius="md"
          boxShadow="md"
          mb={2}
        />

        {breed && (
          <Box maxW="400px" textAlign="justify">
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {breed.name}
            </Text>
            <Text fontSize="14px" color="gray.600">
              {breed.description}
            </Text>
          </Box>
        )}
      </VStack>
    </>
  );
};

export default CatBreeds;
