import { Box } from '@mui/material'

function Page({ children }) {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100vw'}
      height={'100vh'}
      overflow={'hidden'}
      margin={0}
      padding={0}
    >
      {children}
    </Box>
  )
}

export default Page;