import { Box } from '@mui/material'

function Card({ children }) {
  return (
    <Box
      bgcolor={'#5b5b5b'}
      margin={'auto'}
      width={'90%'}
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
      width={'100%'}
      height={'10%'}
      padding={'29px'}
    >
      {children}
    </Box>
  );
}

function CardTitle({ title, subtitle }) {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      flexGrow={1}
      flexShrink={0}
    >
      <Box
        typography={'h3'}
        color={'#ffffff'}
      >
        {title}
      </Box>
      <Box 
        typography={'subtitle1'}
        color={'#c8c4c4'}
      >
        {subtitle}
      </Box>
    </Box>
  )
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