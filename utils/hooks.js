import { useState, useEffect, useCallback } from "react";

import { getSymbols, findByValue } from "../utils";
import { CRYPTOCURRENCIES } from "../configs";

const useTicker = () => {
  // TODO: Fetch crypto using Binance API and map it out.
  // For this example, we will fetch the data every 5 seconds. In future, we will do the same job by using the Web Sockets API.
  const [cryptocurrencies, setCryptocurrencies] = useState(CRYPTOCURRENCIES);

  const fetchCrypto = useCallback(async () => {
    try {
      // getSymbols will return all the symbols from the CRYPROCURRENCIES array
      // i.g. [ETHUSDC, SOLUSDC]
      const response = await fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(
          getSymbols()
        )}`
      );

      const data = await response.json();

      // console.log(data);
      setCryptocurrencies(
        cryptocurrencies.map((item) => {
          const { lastPrice, lowPrice, highPrice } = findByValue(data, item.symbol) || {};

          return {
            ...item,
            highPrice,
            lowPrice,
            price: lastPrice,
            prevPrice: item?.price || 0,
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [cryptocurrencies]);
  useEffect(() => {
    const interval = setInterval(fetchCrypto, 50000);
    return () => clearInterval(interval);
  });
  return cryptocurrencies;
  // fetchCrypto();
};

export { useTicker };
