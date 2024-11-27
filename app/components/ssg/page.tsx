export default async function CoinMarketSSG() {
  const API_KEY = "2589481e3c2a817474bba7774962defb";
    
    const res = await fetch(
      `http://api.coinlayer.com/live?access_key=${API_KEY}`);
    const data = await res.json();
    return (
      <>
        <h1>Coin - ISR</h1>
        <br />
        BTC: {data?.rates?.BTC}
        <br />
        BNB: {data?.rates?.BNB}
      </>
    );
  }