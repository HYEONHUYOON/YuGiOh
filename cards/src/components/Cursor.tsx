'use client'

import { useEffect, useState } from "react"

import { gsap } from 'gsap'
import Image from "next/image"

import CardBackSide from '../assets/images/CardBackSide.jpg'
import ExchangeCard from '../assets/images/Exchange.jpg'

const Cursor = () => {
    const [exchange,setExchange] = useState<boolean>(false)

    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')
        const buttons = document.querySelectorAll('button')

        const onMouseMove  = (e:globalThis.MouseEvent) =>{
            const {clientX,clientY} = e;
            gsap.to(cursor,{x:clientX,y:clientY})
        }

        document.addEventListener('mousemove', onMouseMove)

        const onMouseEnter = (e: globalThis.MouseEvent) => {
            setExchange(true)
            // const button = e.target as HTMLAnchorElement;
            // if (button.classList.contains('view')) {
            //   gsap.to(cursor, { scale: 4 });
            //     // cursorText.style.display = 'block';
            // }else{
            //     gsap.to(cursor,{scale:4})
            // }
        };

        const onMouseLeave = (e: globalThis.MouseEvent) => {
            gsap.to(cursor,{scale:1})
            setExchange(false)
            // cursorText.style.display = 'none';
        }

        buttons.forEach((button) => {
            button.addEventListener('mouseenter', onMouseEnter)
            button.addEventListener('mouseleave', onMouseLeave)
        })
    },[])

    return(
        <div id='custom-cursor' className="custom-cursor">
            <span className="cursor-text">
                <Image src={exchange ? ExchangeCard : CardBackSide} alt="Cursor Icon" style={{width:'23.6px',height:'34.4px'}}/>
            </span>
        </div>
    )
}

export default Cursor