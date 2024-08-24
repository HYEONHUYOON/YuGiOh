'use client'

import { useEffect } from "react"

import { gsap } from 'gsap'
import Image from "next/image"

import CardBackSide from '../assets/images/CardBackSide.jpg'

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')
        const links = document.querySelectorAll('a')

        const onMouseMove  = (e:globalThis.MouseEvent) =>{
            const {clientX,clientY} = e;
            gsap.to(cursor,{x:clientX,y:clientY})
        }

        document.addEventListener('mousemove', onMouseMove)

        const onMouseEnter = (e: globalThis.MouseEvent) => {
            const link = e.target as HTMLAnchorElement;
            if (link.classList.contains('view')) {
              gsap.to(cursor, { scale: 4 });
                // cursorText.style.display = 'block';
            }else{
                gsap.to(cursor,{scale:4})
            }
        };

        const onMouseLeave = (e: globalThis.MouseEvent) => {
            gsap.to(cursor,{scale:1})
            // cursorText.style.display = 'none';
        }

        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnter)
            link.addEventListener('mouseleave', onMouseLeave)
        })
    },[])

    return(
        <div id='custom-cursor' className="custom-cursor">
            <span className="cursor-text">
                <Image src={CardBackSide} alt="Cursor Icon" style={{width:'23.6px',height:'34.4px'}}/>
            </span>
        </div>
    )
}

export default Cursor