import Image from "next/image";
import Box  from "@mui/material/Box";
import { NextPage } from "next";

import MainView from "@/views/home";

async function getCardData() {
  // Vars
  const res = await fetch('http://localhost:3000/api/yugioh/',{cache:'no-cache'})

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Home = async() => {
  const data = await getCardData()

  return (
    <MainView cardData={data.data[0]}/>
  );
}

export default Home