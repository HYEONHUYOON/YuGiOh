'use client'

import { Avatar, Box, Button, Card, Icon, IconButton } from "@mui/material";
import { useEffect, useState } from "react";

import ep1_op from '../../assets/audio/yugioh_ep1_op.mp3'
import puzzle from '../../assets/icons/puzzle_icon.png'

import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [play,setPlay] = useState<boolean>(false)
    const [audio,setAudio] = useState<HTMLAudioElement>()
    const [scroll,setScroll] = useState<number>(0);

    const musicPlayHandler = () => {
        if(audio){
            if(play){
                audio.pause()
                setPlay(false)
            }else{
                audio.play()
                setPlay(true)
            }
        }
    }
    
    const audioInit = () => {
        if(audio){
            audio.currentTime = 0
        }
    }

    const onScroll = () => {
        console.log(window.screenY)
        setScroll(window.screenY)
    }

    useEffect(() => {
        // 유희왕 op 등록
        setAudio(new Audio(ep1_op));

        window.addEventListener('scroll',onScroll)

        return () => {
            window.removeEventListener('scroll',onScroll)
        }
    }, []);

    return (
        <Box sx={{width:'100vw',height:'100vh',position:'relative',background:'radial-gradient(circle, rgb(97 162 204), rgb(32 26 91))'}}>
            <Card 
                sx={{
                    width:'100vw',height:'40px',
                    background:'none', padding:'4px 4px',
                    boxShadow: scroll === 0 ? '' : '0px 1px 20px rgb(32 26 91)',
                    position: scroll === 0 ? '' : 'absolute',
                    display:'flex',alignItems:'center',justifyContent:'space-between',
                }}
            >
                <IconButton href='/yugioh'>
                    <Avatar variant='circular' sx={{width:'30px',height:'30px'}}>
                        <Image src={puzzle} alt="puzzle" width={24} height={24}/>
                    </Avatar>
                </IconButton>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <IconButton onClick={() => {musicPlayHandler()}}>
                        <Icon className={play ? 'pause' : 'play'} sx={{color:'white'}}/>
                    </IconButton>
                    <IconButton onClick={() => {audioInit()}}>
                        <Icon className='square' sx={{color:'white'}}/>
                    </IconButton>
                    <source src={ep1_op} type="audio/mp3" style={{background:'none'}}/>
                </Box>
            </Card>
            <div style={{height: scroll === 0 ? 'calc(100% - 40px)' : 'calc(100% - 40px)',transition:'all 1s'}}>
                {children}
            </div>
        </Box>
    );
}