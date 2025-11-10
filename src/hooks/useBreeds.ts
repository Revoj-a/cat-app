import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Breed {
  id: string;
  name: string;
  description: string;
  image?: { url: string };
}

const useBreeds = (breedName: string) => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [breedsError, setBreedsError] = useState("");
  const [currentBreedIndex, setCurrentBreedIndex] = useState(0);
  const [breedsLoading, setBreedsLoading] = useState(false);

  useEffect(() => {
    if (breeds.length > 0) return;
    const controller = new AbortController();
    setBreedsLoading(true);

    const endpoint = breedName ? `/breeds/${breedName}` : "/breeds";

    console.log("🔍 Fetching breeds from:", endpoint);

    apiClient
      .get<Breed[]>(endpoint, { signal: controller.signal })
      .then((res) => {
        console.log("Breed API response:", res.data);
        setBreeds(res.data);
        setBreedsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setBreedsError("Failed to fetch breed");
        setBreedsLoading(false);
      });
  }, [breedName, breeds.length]);

  const handleBreedsNextImage = () => {
    if (breeds.length === 0) return;

    setCurrentBreedIndex((prev) => (prev < breeds.length - 1 ? prev + 1 : 0));
  };
  return {
    breeds,
    breedsError,
    currentBreedIndex,
    breedsLoading,
    handleBreedsNextImage,
  };
};

export default useBreeds;
