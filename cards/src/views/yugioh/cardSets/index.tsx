'use client'

import { Box } from "@mui/material"
import Image from "next/image"

type SetInfoType = {
    'set_name' : string,
    'set_code' : string,
    'num_of_cards' : number,
    'tcg_date' : string,
    'set_image' : string
}

type CardSetProps = {
    'sets' : SetInfoType[],
}

const CardSets = ({sets} : CardSetProps) => {  
    console.log(sets[0])
    return (
        <Box>
            {
                sets.map((set) => {
                    if(set.set_image){
                        return(
                            <Image src={set.set_image} alt="sets" width={100} height={120}/>
                        )
                    }else{
                        return(
                            <Box></Box>
                        )
                    }
                })
            }
        </Box>
    )   
}

export default CardSets