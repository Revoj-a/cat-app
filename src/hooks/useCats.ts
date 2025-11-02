import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface CatImage {
  id: string;
  url: string;
}

const useCats = () => {
  const [cats, setCats] = useState<CatImage[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<CatImage[]>("/images/search?limit=1", { signal: controller.signal })
      .then((res) => setCats(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch the image");

        return () => controller.abort();
      });
  }, []);

  return { cats, error };
};

export default useCats;
