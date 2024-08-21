import Image from "next/image";
import Box  from "@mui/material/Box";

async function getCardData() {
  // Vars
  const res = await fetch('http://localhost:3000/api/yugioh/')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getCardData()

  console.log(data)

  return (
    <Box sx={{width:'100%',height:'100%'}}>{data.data[0].name}</Box>
  );
}
