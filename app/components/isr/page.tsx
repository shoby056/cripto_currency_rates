export default async function CoinISR() {
  const API_KEY = "2589481e3c2a817474bba7774962defb";
  
  const res = await fetch(
    `http://api.coinlayer.com/live?access_key=${API_KEY}`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );
  const data = await res.json();
  return (
    <>
      BTC: {data?.rates?.BTC}
      <br />
      BNB: {data?.rates?.BNB}
    </>
  );
}