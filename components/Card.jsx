import { Box, Skeleton } from '@mui/material'

function Card({ children }) {
  return (
    <Box
      bgcolor={'#5b5b5b'}
      marginX={'auto'}
      marginY={5}
      width={'50%'}
      height={'auto'}
      borderRadius={5}
    >
      {children}
    </Box>
  );
}

function CardHeader({ children }) {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      flexGrow={0}
      flexShrink={0}
      gap={5}
      width={'100%'}
      height={'10%'}
      padding={'29px'}
    >
      {children}
    </Box>
  );
}

function CardTitle({ civData }) {
  if (!civData) {
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        flexGrow={1}
        flexShrink={0}
      >
        <Skeleton variant='text' sx={{ fontSize: '3rem', width: '100%' }}/>
        <Skeleton variant='text' sx={{ fontSize: '1rem', width: '100%' }}/>
      </Box>
    );
  }


  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      flexGrow={1}
      flexShrink={0}
    >
      <Box typography={'h3'} color={'#ffffff'}>
        {civData.name}
      </Box>
      <Box typography={'subtitle1'} color={'#c8c4c4'}>
        {`${civData.expansion} Expansion`}
      </Box>
    </Box>
  );

  
}

function CardBody({ children }) {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      flexGrow={1}
      flexShrink={0}
      padding={'29px'}
      gap={2}
    >
      {children}
    </Box>
  );
}

function InlineCard({ children }) {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      flexGrow={1}
      flexShrink={0}
      gap={1}
      paddingX={'16px'}
      alignItems={'center'}
      height={'68px'}
      borderRadius={2}
      bgcolor={'#ffffff'}
    >
      {children}
    </Box>
  );
}

export { Card, CardHeader, CardTitle, CardBody, InlineCard };
export default Card;