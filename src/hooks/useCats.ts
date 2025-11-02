import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: Array<{ id: string; name: string }>;
}

const useCats = () => {
  const [cats, setCats] = useState<CatImage[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<CatImage[]>("/images/search?limit=10", { signal: controller.signal })
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
