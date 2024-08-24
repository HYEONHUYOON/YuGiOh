import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

type CardPropsType = {
    src: string;
    size : number;
};

const Card = ({src, size} : CardPropsType) => {

    useEffect(() => {
        const cardContainer = document.querySelector('.cardContainer') as HTMLElement;
        const cardPrism = document.querySelector('.CardPrism') as HTMLElement;

        let { x, y, width, height } = cardContainer.getBoundingClientRect();

        const onMouseMove  = (e:globalThis.MouseEvent) =>{
            const left = e.clientX - x;
            const top = e.clientY - y;
            const centerX = left - width / 2;
            const centerY = top - height / 2;
            const d = Math.sqrt(centerX ** 2 + centerY ** 2);

            cardPrism.style.backgroundPosition = `${left/5 + top/5}%`
            cardContainer.style.transform = `perspective(350px) rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg)`
        }

        cardContainer.addEventListener('mousemove', onMouseMove)        

        const onMouseLeave = (e: globalThis.MouseEvent) => {
            cardContainer.style.transform = ''
            cardPrism.style.filter = 'opacity(0)'
        }

        const onMouseEnter = () => {
            cardPrism.style.filter = 'brightness(1.2) opacity(0.8)'
        }

        cardContainer.addEventListener('mouseenter', onMouseEnter)
        cardContainer.addEventListener('mouseleave', onMouseLeave)
    },[])
    
    return (
        <Box className='cardContainer' sx={{position:'relative'}}>
            <Box className='CardPrism' sx={{width:'186px',height:'189px',position:'absolute',top:'67px',left:'30px'}}/>
            <Image src={src} alt="img" width={246} height={363}/> 
        </Box>
    )
}

export default Card