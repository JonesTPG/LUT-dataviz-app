import React from 'react';
import {
  Box,
  Image,
  Button,
  Text,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  Skeleton
} from '@chakra-ui/core';

import { gql, useQuery } from '@apollo/client';

import { useParams, Link } from 'react-router-dom';

import { useApiUrl } from '../../hooks/common';

const CovidCard = (props) => {
  const { id } = useParams();
  const API_URL = useApiUrl();

  const GET_COVID_CARD = gql`
    query covidCard($id: ID!) {
      covidCard(id: $id) {
        region
        date_of_first_case
        total_cases
        deaths
        over_65
        population_density
        title
        description
        images {
          url
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_COVID_CARD, {
    variables: { id: id }
  });

  if (loading)
    return (
      <>
        <Skeleton h={20}></Skeleton>
      </>
    );
  if (error) return `${error.message}`;

  let {
    title,
    date_of_first_case,
    deaths,
    description,
    images,
    over_65,
    population_density,
    region,
    total_cases
  } = data.covidCard;

  return (
    <>
      <Box
        w={['90%', '70%', '60%', '30%']}
        borderWidth="1px"
        rounded="20px"
        boxShadow="sm"
        bg="gray.200"
        m="0 auto"
        mt="10vh"
      >
        <Text
          textAlign="center"
          mt={5}
          fontSize="xl"
          fontWeight="semibold"
          lineHeight="short"
        >
          {region}
        </Text>
        <Image w="100%" mt={3} rounded="md" src={API_URL + images[0].url} />

        <Stat textAlign="center">
          <StatLabel>Total cases</StatLabel>
          <StatNumber>{total_cases}</StatNumber>
        </Stat>
        <Stat textAlign="center">
          <StatLabel>Deaths</StatLabel>
          <StatNumber>{deaths}</StatNumber>
        </Stat>
        <Stat textAlign="center">
          <StatLabel>Date of first case</StatLabel>
          <StatNumber>{date_of_first_case}</StatNumber>
        </Stat>
        <Stat textAlign="center">
          <StatLabel>Population density</StatLabel>
          <StatNumber>{population_density}</StatNumber>
        </Stat>
        <Stat textAlign="center" t>
          <StatLabel>% > 65 years old</StatLabel>
          <StatNumber>{(over_65 * 100).toPrecision(4)}</StatNumber>
        </Stat>
      </Box>

      <Divider></Divider>

      <Link to={'/cards'}>
        <Box textAlign="center">
          <Button>Show cards</Button>
        </Box>
      </Link>
    </>
  );
};

export default CovidCard;
