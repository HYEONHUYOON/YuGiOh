'use client'

import { Box, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type CardSetType = {
    'set_name': string,
    'set_code': string,
    'set_rarity': string,
    'set_rarity_code': string,
    'set_price': string
}

type CardImageType = {
'id': Number,
'image_url': string,
'image_url_small': string,
'image_url_cropped': string
}

type CardPriceType = {
'cardmarket_price': string,
'tcgplayer_price': string,
'ebay_price': string,
'amazon_price': string,
'coolstuffinc_price': string
}
  
type CardDataType = {
    'id' : Number,
    'name': string,
    'typeline': string[],
    'type': string,
    'humanReadableCardType': string,
    'frameType': string,
    'desc': string,
    'race': string,
    'atk': Number,
    'def': Number,
    'level': 7,
    'attribute': string,
    'archetype': string,
    'ygoprodeck_url': string,
    'card_sets': CardSetType[],
    'card_images': CardImageType[],
    'card_prices': CardPriceType[]
}

type MainViewProps = {
    cardData: CardDataType;
};

const MainView = ({cardData} :MainViewProps) => {
    const [images,setImages] = useState<CardImageType[]>(cardData.card_images)

    console.log(cardData)

    return (
        <Box>
            <Typography variant='h4' fontWeight={'bold'}>{cardData.name}</Typography>
            {images.map((img:CardImageType) => {
                return(
                    <Image key={img.image_url_small} src={img.image_url_small} alt="img" width={164} height={242}/>
                )
            })}
        </Box>
    )
}

export default MainView