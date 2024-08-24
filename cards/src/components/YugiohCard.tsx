import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

import CardBackSide from '../assets/images/CardBackSide.jpg'

type CardPropsType = {
    src: string;
    size : number;
};

const YugiohCard = ({src, size} : CardPropsType) => {
    const [isFlipped,setIsFilpped] = useState<boolean>(false)

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

            if(d/10 > 100 && !isFlipped){
                cardPrism.style.filter = 'opacity(0)'
                setIsFilpped(true)
            }else{
                cardPrism.style.filter = 'brightness(1.2) opacity(0.8)'
                setIsFilpped(false)
            }

            cardPrism.style.backgroundPosition = `${left/5 + top/5}%`
            cardContainer.style.transform = `perspective(350px) rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg)`
        }

        cardContainer.addEventListener('mousemove', onMouseMove)        

        const onMouseLeave = (e: globalThis.MouseEvent) => {
            cardContainer.style.transform = ''
            cardPrism.style.filter = 'opacity(0)'
            setIsFilpped(false)
        }

        const onMouseEnter = () => {
            cardPrism.style.filter = 'brightness(1.2) opacity(0.8)'
        }

        cardContainer.addEventListener('mouseenter', onMouseEnter)
        cardContainer.addEventListener('mouseleave', onMouseLeave)
    },[])
    
    return (
        <Box className='cardContainer' sx={{position:'relative'}}>
            {/* <Box className='CardPrism' sx={{width:'186px',height:'189px',position:'absolute',top:'67px',left:'30px'}}/> */}
            <Box className='CardPrism' sx={{width:'246px',height:'363px',position:'absolute'}}/>

            <Image src={isFlipped ? CardBackSide : src} alt="img" width={246} height={363}/> 
        </Box>
    )
}

export default YugiohCard