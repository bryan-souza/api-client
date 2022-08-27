import { Avatar, Box } from "@mui/material";


function CardHeader({ children }) {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
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


function UnitTypes({ urlArray }) {
  const imageArray = urlArray.map(
    (url, index) => 
    <Avatar
      key={index}
      src={url}
      sx={{ width: 90, height: 90, bgcolor: '#000000' }}
    />
  );

  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      flexGrow={0}
      flexShrink={0}
      gap={'15px'}
      margin={'auto'}
    >
      {imageArray}
    </Box>
  )
}

function Informacoes() {
  const arr = [
    'https://static.wikia.nocookie.net/ageofempires/images/1/1a/Longswordsman_aoe2DE.png',
    'https://static.wikia.nocookie.net/ageofempires/images/e/e9/Monk_aoe2DE.png'
  ]

  return (
    <Box
      bgcolor={'#5b5b5b'}
      margin={'auto'}
      width={'90%'}
      height={'auto'}
      borderRadius={5}
    >
      <CardHeader>
        <CardTitle title='Celts' subtitle='Age of Kings Expansion'/>
        <UnitTypes urlArray={arr} />
      </CardHeader>
    </Box>
  );
}

export default Informacoes;