import apiClient from "@/services/api-client";
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
    const controller = new AbortController();
    apiClient
      .get<CatImage[]>("/images/search?limit=10", { signal: controller.signal })
      .then((res) => {
        setCats(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch the image");
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  const handleNextImage = () => {
    if (currentIndex < cats.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      apiClient
        .get<CatImage[]>("/images/search?limit=10")
        .then((res) => {
          setCats(res.data);
          setCurrentIndex(0);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch the image");
          setLoading(false);
        });
    }
  };

  return { cats, error, currentIndex, loading, handleNextImage };
};

export default useCats;
