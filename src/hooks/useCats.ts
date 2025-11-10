import apiClient from "@/services/api-client";
import axios from "axios";
import { useEffect, useState } from "react";

interface CatImage {
  id: string;
  url: string;
}

const useCats = () => {
  const [cats, setCats] = useState<CatImage[]>([]);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cats.length > 0) return;
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<CatImage[]>("/images/search?limit=10", { signal: controller.signal })
      .then((res) => {
        console.log("API response:", res.data);
        setCats(res.data);
        setCurrentIndex(0);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        console.error("API error:", err);
        setError("Failed to fetch the image");
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [cats.length]);

  const handleNextImage = () => {
    if (cats.length === 0) return;

    setCurrentIndex((prev) => (prev < cats.length - 1 ? prev + 1 : 0));
  };

  return { cats, error, currentIndex, loading, handleNextImage };
};

export default useCats;
