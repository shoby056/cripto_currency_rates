export default async function CoinSSR(){
  const API_KEY = "2589481e3c2a817474bba7774962defb";
  
  const data=await fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`,
  {
cache:"no-store"
  }
  )
  const convertedData :any = await data.json();



    return(

<> 
<h1>Coin SSR 2</h1>
BTC: {convertedData?.rates?.BTC}
      <br />
      BNB: {convertedData?.rates?.BNB}

</>




    )
}    