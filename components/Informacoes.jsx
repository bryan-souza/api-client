import axios from 'axios';
import { useState, useEffect } from 'react';

import { Add, ExpandMore, Shield, Engineering } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Skeleton, Typography } from "@mui/material";
import { Card, CardHeader, CardTitle, CardBody, InlineCard } from './Card';
import { ListItem } from './List';

// Data manipulation functions
function extractIdFromUrl(url) {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1];
}

// Sub-components
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

function UniqueUnit({ civData }) {
  const [unitData, setUnitData] = useState(null);
  
  useEffect(() => {
    if (civData) {
      const unitId = extractIdFromUrl(civData.unique_unit[0]);

      axios({
        method: 'GET',
        baseURL: '/api/unit',
        url: unitId.toString()
      })
      .then(({ data }) => setUnitData(data))
      .catch((err) => console.log(err));
    }
  }, [civData]);
  

  if (!unitData || !civData) {
    return (
      <InlineCard>
        <Skeleton variant='circular' width={40} height={40} />
        <Skeleton variant='text' sx={{ fontSize: '3rem', width: '100%' }} />
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

function UniqueTech({ civData }) {
  const [techData, setTechData] = useState(null);

  useEffect(() => {
    if (civData) {
      const techId = extractIdFromUrl(civData.unique_tech[0]);

      axios({
        method: 'GET',
        baseURL: '/api/technology',
        url: techId.toString()
      })
      .then(({ data }) => setTechData(data))
      .catch((_) => null);  
    }
  }, [civData]);


  if (!techData || !civData) {
    return (
      <InlineCard>
        <Skeleton variant='circular' width={40} height={40} />
        <Skeleton variant='text' sx={{ fontSize: '3rem', width: '100%' }} />
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

function CivBonuses({ civData }) {
  if (!civData) {
    return (
      <Accordion>
        <AccordionSummary disabled={true} >
          <Box display={'flex'} flexDirection={'row'} gap={1} alignItems={'center'} width={'100%'}>
            <Skeleton variant='circular' width={40} height={40} />
            <Skeleton variant='text' sx={{ fontSize: '3rem', width: '100%' }}/>
          </Box>
        </AccordionSummary>
      </Accordion>  
    );
  }

  const bonusEntries = civData.civilization_bonus.map(
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



// Main component
function Informacoes({ civId }) {
  const [civData, setCivData] = useState(null);

  useEffect(() => {
      axios({
        method: 'GET',
        baseURL: '/api/civilization',
        url: civId.toString()
      })
      .then(({ data }) => setCivData(data))
      .catch((err) => console.log(err));
  }, [civId]);


  const imgArr = [
    'https://static.wikia.nocookie.net/ageofempires/images/1/1a/Longswordsman_aoe2DE.png',
    'https://static.wikia.nocookie.net/ageofempires/images/e/e9/Monk_aoe2DE.png'
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle civData={civData} />
        <UnitTypes urlArray={imgArr} />
      </CardHeader>

      <CardBody>
	      <UniqueUnit civData={civData} />
        <UniqueTech civData={civData} />
        <CivBonuses civData={civData} />
      </CardBody>
    </Card>
  );
}

export default Informacoes;
