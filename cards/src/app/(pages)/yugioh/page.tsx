import CardSetsView from "../../../views/yugioh/cardSets";

async function getCardData() {
  // Vars
  const res = await fetch('http://localhost:3000/api/getCardSets/')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const CardSets = async() => {
  const data = await getCardData()

  return (
    <CardSetsView sets={data.data}/>
  );
}

export default CardSets