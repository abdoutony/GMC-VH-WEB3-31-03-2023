import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  return { data, loading, error };
}
