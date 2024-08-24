import { Box, Typography } from "@mui/material"
import Link from "next/link"

const MainView = () => {
    return (
        <Box>
            <Typography variant="h1" className="view">A</Typography>
            <Link href='/home'>B</Link>
        </Box>
    )
}

export default MainView