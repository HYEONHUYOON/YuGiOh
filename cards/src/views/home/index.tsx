'use client'

import { useState } from "react"

import Link from "next/link"
import Image, { StaticImageData } from "next/image"

import { Box, Grid, Typography } from "@mui/material"

import Star from '../../assets/icons/Starball_Red.svg.png'
import YugiohAttribute from '../../data/yugiohAttributes'
import Card from '../../components/Card'


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
    const [imgIndex,setImgIndex] = useState<number>(0)

    console.log(cardData)

    const attributeImg : StaticImageData  = YugiohAttribute[cardData.attribute]

    return (
        <Grid container spacing={2}>
            <Grid container item xs={12} md={6} spacing={2} sx={{padding:'10px'}}>
                <Grid item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
                    <Typography id='CardNameText' className="view" variant='h2' fontWeight={'bold'}>{cardData.name}</Typography>
                    <Image src={attributeImg} alt="level" width={30} height={30}/>        
                </Grid>

                <Grid item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'4px'}}>
                    {
                        Array.from({length:cardData.level}).map((_,index) => (
                            <Image key={index} src={Star} alt="level" width={20} height={20}/>
                        ))
                    }
                </Grid>

                <Grid item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Image src={cardData.card_images[0].image_url_cropped} alt="img" width={250} height={260} style={{border:'8px solid #494f6d',boxShadow:'0px 0px 10px #45454e'}}/>
                </Grid>

                <Grid item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Typography id='CardTypeText' className="view" variant='h6' fontWeight={'bold'}>[{cardData.typeline[0]}/{cardData.typeline[1]}]</Typography>
                </Grid>

                <Grid item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Typography id='CardDescText' className="view" variant='h6' fontWeight={'bold'}>{cardData.desc}</Typography>
                </Grid>

                <Grid item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Typography id='CardTypeText' className="view" variant='h6' fontWeight={'bold'}> ATK/{(cardData.atk).toString()} DEF/{(cardData.def).toString()} </Typography>
                </Grid>
            </Grid>

            <Grid container item xs={12} md={6} spacing={2} sx={{padding:'10px'}}>
            {/* {cardData.card_images.map((img:CardImageType) => {
                return(
                    <Grid item xs sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <Image key={img.image_url_small} src={img.image_url} alt="img" width={164} height={242}/>
                    </Grid>
                )
            })} */}

                <Grid item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Card src={cardData.card_images[imgIndex].image_url} size={20}/> 
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainView