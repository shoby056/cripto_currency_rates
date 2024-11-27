"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CoinSSG() {
    const API_KEY = "c6e9bafbe4faff3163b68dd8e1a12a23";
 
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  return (
    <>
   
      <h1>Coin CSR</h1> <Link href="./coin-ssr"> <Button variant="secondary" size="lg">
        {" "}
        BTC: {data?.rates?.BTC}
      </Button></Link>
     
      <br />
    
      <Button variant="ghost" size="lg">
        {" "}
        BNB: {data?.rates?.BNB}
      </Button>
      <Button variant="link" size="lg">
        {" "}
        BNB: {data?.rates?.BNB}
      </Button>

      <Button variant="link" size="lg">
        {" "}
        USDT: {data?.rates?.USDT}
      </Button>

      <Button variant="link" size="lg">
        {" "}
        ETH: {data?.rates?.ETH}
      </Button>

      <Button variant="link" size="lg">
        {" "}
        DOGE: {data?.rates?.DOGE}
      </Button>

      <Button variant="link" size="lg">
        {" "}
        ADA: {data?.rates?.ADA}
      </Button>
    </>
  );
}