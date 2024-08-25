import MainView from "../../../../../views/yugioh/cardInfo"

async function getCardData() {
  // Vars
  const res = await fetch('http://localhost:3000/api/getCardInfo/',{cache:'no-cache'})

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const CardInfo = async() => {
  const data = await getCardData()

  return (
    <MainView cardData={data.data[0]}/>
  );
}

export default CardInfo