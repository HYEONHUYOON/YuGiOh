'use client'

import { createTheme } from '@mui/material/styles';
import '../assets/fonts/font.css'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ff8e88',
        },
        text : {
            primary : '#black',
            secondary : '#c0c0c0', 
        }
    },
    components: {
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#b2b2b2', // 원하는 배경색으로 설정
                },
            },
        },
    },
});
