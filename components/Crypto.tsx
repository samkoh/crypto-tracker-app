/* eslint-disable @next/next/no-img-element */
import React, { memo } from "react";

import Loader from "./Loader";
import Status from "./Status";
import { formatPrice } from "../utils";

interface Props {
  crypto: {
    id: string;
    name: string;
    symbol: string;
    iconCode: number;
    price: number;
    highPrice: number;
    lowPrice: number;
    prevPrice: number;
    explorer: string;
  };
}

function Crypto({ crypto }: Props) {
  const colorClassName = crypto.prevPrice ? crypto.price > crypto.prevPrice ? "text-green-600" : "text-red-500" : "text-gray-900";
  return (
    <div className="max-w p-6 bg-white border border-gray-100 rounded-lg shadow-lg">
      {/* TODO: crypto card code */}
      <img className="w-10 h-10 mb-2 rounded-full" src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${crypto.iconCode}.png`} />
      <h5 className="mb-1 text-2xl font-semibold tracking-tight text-gray-900">
        {crypto.name}
      </h5>

      {crypto.price ? (
        <>
          <span className={colorClassName} title={`${crypto.price}`}>
            {formatPrice(crypto.price)}
          </span>
          <div className="mt-4">
            <Status label="24h High" value={formatPrice(crypto.highPrice)} />
            <Status label="24h High" value={formatPrice(crypto.lowPrice)} />
            <Status label="Market" value={crypto.symbol} />
          </div>
        </>
      ) : (
        <Loader />
      )}

      <a
        className="inline-flex items-center text-blue-600 mt-6"
        href={crypto.explorer}
        target="_blank"
        rel="noreferrer"
      >
        Explorer
        <svg
          className="w-5 h-5 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.0001 15.86C11.5601 15.86 11.1401 15.69 10.8301 15.37L5.30007 9.84001C4.91007 9.45001 4.91007 8.82001 5.30007 8.43001C5.69007 8.04001 6.32007 8.04001 6.71007 8.43001L12.0001 13.72L17.2901 8.43001C17.6801 8.04001 18.3101 8.04001 18.7001 8.43001C19.0901 8.82001 19.0901 9.45001 18.7001 9.84001L13.1701 15.37C12.8601 15.68 12.4401 15.86 12.0001 15.86Z" fill="currentColor"></path>
        </svg>

      </a>

    </div>
  );
}

export default memo(Crypto);
