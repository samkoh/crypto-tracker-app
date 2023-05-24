import React from "react";
import type { NextPage } from "next";

import NoSSR from "../components/NoSSR";
import Layout from "../components/Layout";
import Ticker from "../components/Ticker";

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Layout>
        <div className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-2 lg:px-4">
            {/* TODO: header code */}
            <div className="sm:text-center">
              <h2 className="text-lg font-semibold leading-8 text-indigo-600">
                Cryptocurrencies
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                Digital currencies for an increasingly digital age
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Cryptocurrencies are decentralized digital currencies that use encryption techniques to regulate the generation of units of currency and verify the transfer of funds, operating independently of a central bank.
              </p>
            </div>

            {/* Main content - crypto cards */}
            <Ticker />

            {/* TODO: footer code */}
            <div className="mt-20 py-4 text-center">
              <p className="text-gray-400">Powered by</p>
              <a href="https://binance.com" className="underline text-indigo-600" target="_blank" rel="noreferrer">
                Binance
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </NoSSR>
  );
};

export default Home;
