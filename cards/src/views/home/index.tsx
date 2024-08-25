'use client'

import { Dispatch, SetStateAction, useRef, useState } from "react"

import Link from "next/link"
import Image, { StaticImageData } from "next/image"

import { Box, Card, Grid, IconButton, Radio, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

import Star from '../../assets/icons/Starball_Red.svg.png'
import CardBackSide from '../../assets/images/CardBackSide.jpg'

import YugiohAttribute from '../../data/yugiohAttributes'
import YugiohCard from '../../components/YugiohCard'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

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
    'name_en' : string
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

type CardSelectButtonProps = {
    img: CardImageType;
    index : number;
    imgIndex : number
    setImgIndex : Dispatch<SetStateAction<number>>
}

const CardSelectButton = ({img,index,imgIndex,setImgIndex} : CardSelectButtonProps) => {
    const [hover,setHover] = useState<boolean>(false)

    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {

            gsap.to('.selctCardButton', { x: 360 }); // <-- automatically reverted

    },{ dependencies: [hover], scope: containerRef, revertOnUpdate: true }); // <-- scope is for selector text (optional)

    return (
        <div ref={containerRef} className='selctCardButton' onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
            <Image 
                onClick={() => {setImgIndex(index)}} 
                src={(imgIndex === index) || hover ? img.image_url : CardBackSide} 
                alt="img" 
                width={35.4} 
                height={51.6}
                style={{transform: (imgIndex === index) || hover ? 'rotateY(360deg)' : '', transition : 'all 0.5s'}}
            /> 
        </div>  
    )
}

const MainView = ({cardData} :MainViewProps) => {
    const [images,setImages] = useState<CardImageType[]>(cardData.card_images)
    const [imgIndex,setImgIndex] = useState<number>(0)

    console.log(cardData)

    const attributeImg : StaticImageData  = YugiohAttribute[cardData.attribute]

    return (
        <Card sx={{width:'100vw',height:'100%',background:'none'}}>
            <Grid2 container sx={{height:'20%'}}>
                <Grid2 xs={12} md={4} sx={{padding:'30px'}}>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-start',gap:'20px'}}>
                        <Image src={cardData.card_images[0].image_url_cropped} alt="img" width={40} height={40} style={{border:'1px solid #494f6d',boxShadow:'0px 0px 10px #45454e',borderRadius:'90px'}}/>
                        <Typography id='CardNameText-En' className="view" variant='h5' fontWeight={'500'} color={'white'} whiteSpace={'nowrap'}>{cardData.name_en}</Typography>
                    </Box>
                </Grid2>

                <Grid2 xs={12} md={4}>

                </Grid2>

                <Grid2 xs={12} md={4}>
                    
                </Grid2>  
            </Grid2>

            <Grid2 container sx={{height:'60%'}}>
                <Grid2 xs={12} md={4} sx={{height:'100%',padding:'30px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',gap:'6px'}}>
                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start',gap:'10px'}}>
                        <Typography id='CardNameText' className="view" variant='subtitle1' fontWeight={'600'} color={'white'} whiteSpace={'nowrap'}>{cardData.name}</Typography>
                        <Image src={attributeImg} alt="level" width={20} height={20}/>        
                    </Box>

                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start',gap:'4px'}}>
                        <Image src={Star} alt="level" width={14} height={14}/>
                        <Typography  className="view" variant='subtitle1' fontWeight={'600'} color={'white'} whiteSpace={'nowrap'}>x {cardData.level}</Typography>
                    </Box>

                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                        <Typography id='CardTypeText' className="view" variant='caption' color={'white'}>[{cardData.typeline[0]}/{cardData.typeline[1]}]</Typography>
                    </Box>

                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <Typography id='CardDescText' className="view" variant='subtitle2' fontSize={'16px'} fontWeight={'600'} color={'white'}>{cardData.desc}</Typography>
                    </Box>

                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                        <Typography id='CardTypeText' className="view" variant='caption' color={'white'}> ATK/{(cardData.atk).toString()} DEF/{(cardData.def).toString()} </Typography>
                    </Box>
                </Grid2>

                <Grid2 xs={12} md={4}>
                    <Box sx={{width:'100%',height:'80%',display:'flex',alignItems:'center',justifyContent:'center',padding:'30px 0px'}}>
                        <YugiohCard src={cardData.card_images[imgIndex].image_url} size={20}/> 
                    </Box>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'4px'}}>
                        {
                            cardData.card_images.map((img,index) => (
                                <CardSelectButton key={(img.id).toString()} img={img} index={index} imgIndex={imgIndex} setImgIndex={setImgIndex}/>   
                            ))
                        }
                    </Box>
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
        </Card>
)
}

export default MainView