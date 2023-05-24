import React from "react";

import Crypto from "./Crypto";
import { useTicker } from "../utils/hooks";

export default function Ticker() {
  const cryptocurrencies = useTicker();

  console.log('crypto', cryptocurrencies);


  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* TODO: display ticker logic */}
      {cryptocurrencies?.map((crypto) => (
        <Crypto key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
}
