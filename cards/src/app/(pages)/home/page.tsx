import Image from "next/image";
import Box  from "@mui/material/Box";
import { NextPage } from "next";

import MainView from "@/views/home";

async function getCardData() {
  // Vars
  const res = await fetch('http://localhost:3000/api/yugioh/')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Home = async() => {
  const data = await getCardData()

  console.log(data)

  return (
    <MainView />
  );
}

export default Home