"use client";
import CoinMarket from "./components/page";
import CoinSSR from "./components/isr/page";
export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center">
      Check Coin-Market Page
      <CoinMarket/>
      <CoinSSR/>
    </div>
  );
}