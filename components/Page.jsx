import { Box } from '@mui/material'

function Page({ children }) {
    return (
        <Box width={'100vw'} height={'100vh'} m={0} p={0}>
            {children}
        </Box>
    )
}

export default Page;