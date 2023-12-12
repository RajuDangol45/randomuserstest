import React, { useEffect, useState } from "react";
import axios from "axios";

const url = 'https://randomuser.me/api/?results=100';

function useRandomUsersFetch() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error, setData };
}

export default useRandomUsersFetch;
