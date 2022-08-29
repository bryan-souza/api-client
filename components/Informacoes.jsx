import axios from 'axios';
import { useState, useEffect, useContext } from 'react';

import { Add, ExpandMore, Shield, Engineering } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Skeleton, Typography } from "@mui/material";
import { Card, CardHeader, CardBody, InlineCard } from './Card';
import { ListItem } from './List';

import { context } from '../components/CivContext';
import civilizations from '../civilizations';


function extractIdFromUrl(url) {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1];
}


function Informacoes() {
  const { civId } = useContext(context);
  const [civData, setCivData] = useState(null);
  const [unitData, setUnitData] = useState(null);
  const [techData, setTechData] = useState(null);

  // Civilization data fetcher
  useEffect(() => {
    setCivData(null);
    setUnitData(null);
    setTechData(null);
    
    if (civId) {
      axios({
        method: 'GET',
        baseURL: '/api/civilization',
        url: civId.toString()
      })
      .then(({ data }) => setCivData(data))
      .catch((err) => console.log(err));
    }
  }, [civId]);


  // Unique unit data fetcher
  useEffect(() => {
    if (civData) {
      const unitArr = civData.unique_unit.map(
        async (url) => {
          const unitId = extractIdFromUrl(url);

          const request = await axios({
            method: 'GET',
            baseURL: '/api/unit',
            url: unitId.toString()
          })
          .then(({ data }) => data)
          .catch((err) => console.log(err));

          return request;
        }
      );

      setUnitData(unitArr);
    }
  }, [civData]);


  // Unique technology data fetcher
  useEffect(() => {
    if (civData) {
      const techArr = civData.unique_tech.map(
        async (url) => {
          const techId = extractIdFromUrl(url);

          const response = await axios({
            method: 'GET',
            baseURL: '/api/technology',
            url: techId.toString()
          })
          .then(({ data }) => data)
          .catch((err) => console.log(err));

          return response;
        }
      );
      
      setTechData(techArr);
    }
  }, [civData]);


  // Send empty div if nothing was selected
  if (!civId) return <div />

  // Send skeleton if content is not loaded
  if (!(civData && unitData && techData)) {
    return (
      <Card>
        <CardHeader>
          {/* Title */}
          <Box display={'flex'} flexDirection={'column'} flexGrow={1} flexShrink={0}>
            <Skeleton variant='text' sx={{ fontSize: '3rem', width: '100%' }}/>
            <Skeleton variant='text' sx={{ fontSize: '1rem', width: '100%' }}/>
          </Box>

          {/* Army Type */}
          <Box display={'flex'} flexDirection={'row'} flexGrow={0} flexShrink={0} gap={'15px'} margin={'auto'}>
            <Skeleton variant='circular' width={90} height={90} />
          </Box>
        </CardHeader>

        <CardBody>
          {/* Unique Unit */}
          <InlineCard>
            <Skeleton variant='circular' width={40} height={40} />
            <Skeleton variant='text' sx={{ fontSize: '3rem', width: '100%' }} />
          </InlineCard>

          {/* Unique Technology */}
          <InlineCard>
            <Skeleton variant='circular' width={40} height={40} />
            <Skeleton variant='text' sx={{ fontSize: '3rem', width: '100%' }} />
          </InlineCard>

          {/* Civilization Bonus */}
          <Accordion>
            <AccordionSummary disabled={true} >
              <Box display={'flex'} flexDirection={'row'} gap={1} alignItems={'center'} width={'100%'}>
                <Skeleton variant='circular' width={40} height={40} />
                <Skeleton variant='text' sx={{ fontSize: '3rem', width: '100%' }}/>
              </Box>
            </AccordionSummary>
          </Accordion>
        </CardBody>
      </Card>
    );
  }

  // Return loaded content
  return (
    <Card>
      <CardHeader>
        {/* Card Title */}
        <Box display={'flex'} flexDirection={'column'} flexGrow={1} flexShrink={0} >
          <Box typography={'h3'} color={'#ffffff'}>
            {civData.name}
          </Box>
          <Box typography={'subtitle1'} color={'#c8c4c4'}>
            {`${civData.expansion} Expansion`}
          </Box>
        </Box>

        {/* Army Type */}
        <Box display={'flex'} flexDirection={'row'} flexGrow={0} flexShrink={0} gap={'15px'} margin={'auto'}>
          {civilizations[civId - 1].unit_types.map((url, index) => 
            <Avatar key={index} src={url} sx={{ width: 90, height: 90, bgcolor: '#000000' }} />
          )}
        </Box>
      </CardHeader>

      <CardBody>
        {/* Unique Unit */}
        {unitData.map((item, index) =>
          <InlineCard key={index}>
            <Shield sx={{ fontSize: 40 }} />
            <Typography typography={'h4'}>{item.name}</Typography>
          </InlineCard>
        )}

        {/* Unique Tech */}
        {techData.map((item, index) =>
          <InlineCard key={index}>
            <Engineering sx={{ fontSize: 40 }} />
            <Typography typography={'h4'}>{item.name}</Typography>
          </InlineCard>
        )}

        {/* Civilization Bonuses */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore sx={{ fontSize: 40 }}/>}>
            <Box display={'flex'} flexDirection={'row'} gap={1} >
              <Add sx={{ fontSize: 40 }} />
              <Typography typography={'h4'}>Bônus de Civilização</Typography>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <Box display={'flex'} flexDirection={'column'} gap={1} >
              {civData.civilization_bonus.map((item, index) =>
                <ListItem key={index}>{item}</ListItem>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      </CardBody>
    </Card>
  );
}

export default Informacoes;
