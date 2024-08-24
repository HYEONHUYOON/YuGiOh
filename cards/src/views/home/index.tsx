'use client'

import { useState } from "react"

import Link from "next/link"
import Image, { StaticImageData } from "next/image"

import { Box, Grid, IconButton, Radio, Typography } from "@mui/material"

import Star from '../../assets/icons/Starball_Red.svg.png'
import YugiohAttribute from '../../data/yugiohAttributes'
import Card from '../../components/Card'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"


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
        <Box sx={{width:'100vw',height:'100vh'}}>
            <Grid2 container sx={{height:'20%'}}>
                <Grid2 xs={12} md={4}>
                
                </Grid2>

                <Grid2 xs={12} md={4}>

                </Grid2>

                <Grid2 xs={12} md={4}>
                    
                </Grid2>  
            </Grid2>

            <Grid2 container sx={{height:'60%'}}>
                <Grid2 xs={12} md={4} spacing={2} sx={{height:'100%',padding:'30px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px'}}>
                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
                        <Typography id='CardNameText' className="view" variant='h5' fontWeight={'500'} color={'white'} whiteSpace={'nowrap'}>{cardData.name}</Typography>
                        <Image src={attributeImg} alt="level" width={24} height={24}/>        
                    </Box>

                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-end',gap:'4px'}}>
                        {
                            Array.from({length:cardData.level}).map((_,index) => (
                                <Image key={index} src={Star} alt="level" width={14} height={14}/>
                            ))
                        }
                    </Box>

                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <Image src={cardData.card_images[0].image_url_cropped} alt="img" width={50} height={52} style={{border:'1px solid #494f6d',boxShadow:'0px 0px 10px #45454e'}}/>
                    </Box>

                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                        <Typography id='CardTypeText' className="view" variant='caption' color={'white'}>[{cardData.typeline[0]}/{cardData.typeline[1]}]</Typography>
                    </Box>

                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <Typography id='CardDescText' className="view" variant='caption' fontSize={'16px'} color={'white'}>{cardData.desc}</Typography>
                    </Box>

                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
                        <Typography id='CardTypeText' className="view" variant='caption' color={'white'}> ATK/{(cardData.atk).toString()} DEF/{(cardData.def).toString()} </Typography>
                    </Box>
                </Grid2>

                <Grid2 xs={12} md={4}>
                    <Box sx={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',padding:'30px 0px'}}>
                        <Card src={cardData.card_images[imgIndex].image_url} size={20}/> 
                    </Box>
                    {/* <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0px'}}>
                        {
                            Array.from({length:cardData.card_images.length}).map((_,index) => (
                                <Radio
                                    size="small"
                                    key={index}
                                    checked = {index===imgIndex}
                                    onChange={() => {setImgIndex(index)}}
                                />
                            ))
                        }
                    </Box> */}
                </Grid2>

                <Grid2 xs={12} md={4}>
                    
                </Grid2>  
            </Grid2>

            <Grid2 container sx={{height:'20%'}}>
                <Grid2 xs={12} md={4}>
                
                </Grid2>

                <Grid2 xs={12} md={4}>

                </Grid2>

                <Grid2 xs={12} md={4}>
                    
                </Grid2>  
            </Grid2>
        </Box>
)
}

export default MainView