import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

export interface Bean {
  id: string;
  name: string;
  country: string;
  variety: string;
  process: string;
  producer: string;
  roaster: string;
  roast_level: string;
  note: string;
}

const useBeans = () => {
  const [beans, setBeans] = useState<Bean[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    axios
      .get("/api/beans")
      .then((res) => {
        setBeans(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { beans, error, isLoading, setBeans, setError };
};

export default useBeans;
