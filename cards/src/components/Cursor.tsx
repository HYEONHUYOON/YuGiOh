'use client'

import { useEffect } from "react"

import { gsap } from 'gsap'

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')
        const links = document.querySelectorAll('a')
        const cursorText = document.querySelector('.cursor-text') as HTMLElement;

        const onMouseMove  = (e:globalThis.MouseEvent) =>{
            const {clientX,clientY} = e;
            gsap.to(cursor,{x:clientX,y:clientY})
        }

        document.addEventListener('mousemove', onMouseMove)

        const onMouseEnter = (e: globalThis.MouseEvent) => {
            const link = e.target as HTMLAnchorElement;
            if (link.classList.contains('view')) {
              gsap.to(cursor, { scale: 4 });
                cursorText.style.display = 'block';
            }else{
                gsap.to(cursor,{scale:4})
            }
        };

        const onMouseLeave = (e: globalThis.MouseEvent) => {
            gsap.to(cursor,{scale:1})
            cursorText.style.display = 'none';
        }

        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnter)
            link.addEventListener('mouseleave', onMouseLeave)
        })
    })

    return(
        <div id='custom-cursor' className="custom-cursor">
            <span className="cursor-text">View</span>
        </div>
    )
}

export default Cursor