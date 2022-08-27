import { ShieldOutlined, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Typography } from "@mui/material";


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

function ListItem({ children }) {
  return (
    <Box
      display={'flex'}
      flexGrow={1}
      flexShrink={0}
      paddingX={'20px'}
      borderRadius={5}
      bgcolor={'#5b5b5b'}
      fontSize={'22px'}
      color={'#ffffff'}
    >
      {children}
    </Box>
  );
}

function CivBonuses({ bonuses }) {
  const bonusEntries = bonuses.map(
    (item, index) =>
      <ListItem key={index}>{item}</ListItem>
  );

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore sx={{ fontSize: 40 }}/>}>
        <Box display={'flex'} flexDirection={'row'} gap={1} >
          <ShieldOutlined sx={{ fontSize: 40 }} />
          <Typography typography={'h4'}>Bônus de Civilização</Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Box display={'flex'} flexDirection={'column'} gap={1} >
          {bonusEntries}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}





function Informacoes() {
  const imgArr = [
    'https://static.wikia.nocookie.net/ageofempires/images/1/1a/Longswordsman_aoe2DE.png',
    'https://static.wikia.nocookie.net/ageofempires/images/e/e9/Monk_aoe2DE.png'
  ]

  const bonusArr = [
    "Infantry moves 15% faster",
    "Lumberjacks work 15% faster",
    "Siege weapons reload 20% faster",
    "Sheep cannot be stolen if within one Celt unit's line of sight"
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
        <UnitTypes urlArray={imgArr} />
      </CardHeader>

      <CardBody>
        <CivBonuses bonuses={bonusArr} />
      </CardBody>
    </Box>
  );
}

export default Informacoes;