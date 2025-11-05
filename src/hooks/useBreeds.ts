import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Breed {
  id: string;
  url: string;
  description: string;
}

const useBreeds = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<Breed[]>("/breeds")
      .then((res) => {
        setBreeds(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch breed");
        setLoading(false);
      });
  }, []);
  return { breeds, error, loading };
};

export default useBreeds;
