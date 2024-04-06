import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          // Handle error here (e.g., console.error or set an error state)
          throw new Error(`API request failed with status: ${res.status}`);
        }
      })
      .then((res) => {
        setData(res.rates);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        // Optionally set an error state or handle it differently
      });
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
