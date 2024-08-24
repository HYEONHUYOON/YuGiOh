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
});
