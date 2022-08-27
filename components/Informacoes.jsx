import axios from 'axios';
import { useState } from 'react';

import { Add, ExpandMore, Shield, Engineering } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Skeleton, Typography } from "@mui/material";
import { Card, CardHeader, CardTitle, CardBody, InlineCard } from './Card';
import { ListItem } from './List';


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

function UniqueUnit({ url }) {
  const [unitData, setUnitData] = useState(null);

  axios({
    method: 'GET',
    url: url
  })
  .then(({ data }) => {
    setUnitData(data);
  });

  if (!unitData) {
    return (
      <InlineCard>
        <Skeleton variant='circular' width={40} height={40} />
	      <Skeleton variant='text' sx={{ fontSize: '2.125rem', width: '100%' }} />
      </InlineCard>
    );
  }

  return (
    <InlineCard>
      <Shield sx={{ fontSize: 40 }} />
      <Typography typography={'h4'}>{unitData.name}</Typography>
    </InlineCard>
  );
}

function UniqueTech({ url }) {
  const [techData, setTechData] = useState(null);

  axios({
    method: 'GET',
    url: url
  })
  .then(({ data }) => {
    setTechData(data);
  });

  if (!techData) {
    return (
      <InlineCard>
        <Skeleton variant='circular' width={40} height={40} />
	      <Skeleton variant='text' sx={{ fontSize: '2.125rem', width: '100%' }} />
      </InlineCard>
    );
  }

  return (
    <InlineCard>
      <Engineering sx={{ fontSize: 40 }} />
      <Typography typography={'h4'}>{techData.name}</Typography>
    </InlineCard>
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
          <Add sx={{ fontSize: 40 }} />
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
    <Card>
      <CardHeader>
        <CardTitle title='Celts' subtitle='Age of Kings Expansion'/>
        <UnitTypes urlArray={imgArr} />
      </CardHeader>

      <CardBody>
	      <UniqueUnit url='/api/unit/woad_raider' />
        <UniqueTech url='/api/technology/furor_celtica' />
        <CivBonuses bonuses={bonusArr} />
      </CardBody>
    </Card>
  );
}

export default Informacoes;
