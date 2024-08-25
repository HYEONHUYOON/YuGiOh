'use client'

import Box from "@mui/material/Box"
import Skeleton from "@mui/material/Skeleton"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const Loading = () => {
    console.log('LOADING...')
    return (
        <Box sx={{width:'100vw',height:'100vh'}}>
            <Grid2 container sx={{height:'20%'}}>
                <Grid2 xs={12} md={4} sx={{padding:'30px'}}>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-start',gap:'20px'}}>
                        <Skeleton animation='wave' variant="circular" width={40} height={40} />
                        <Skeleton animation='wave' variant="text" width={120} height={30}/>
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
                    <Skeleton animation='wave' variant="text" width={120} height={30}/>
                    <Skeleton animation='wave' variant="circular" width={20} height={20} />
                    </Box>

                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start',gap:'4px'}}>
                        <Skeleton animation='wave' variant="circular" width={14} height={14} />
                        <Skeleton animation='wave' variant="text" width={120} height={30}/>
                    </Box>

                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                        <Skeleton animation='wave' variant="text" width={120} height={30}/>
                    </Box>

                    <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}>
                        <Skeleton animation='wave' variant="text" width={'100%'} height={30}/>
                        <Skeleton animation='wave' variant="text" width={'100%'} height={30}/>
                        <Skeleton animation='wave' variant="text" width={'20%'} height={30}/>
                    </Box>

                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                        <Skeleton animation='wave' variant="text" width={120} height={30}/>
                    </Box>
                </Grid2>

                <Grid2 xs={12} md={4}>
                    <Box sx={{width:'100%',height:'80%',display:'flex',alignItems:'center',justifyContent:'center',padding:'30px 0px'}}>
                        <Skeleton animation='wave' variant="rectangular" width={246} height={363} />
                    </Box>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'4px'}}>
                        {
                            Array.from({length:4}).map((_,index) => (
                                <Skeleton animation='wave' key={index} variant="rectangular" width={35.4} height={51.6} />
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
        </Box>
)
}

export default Loading