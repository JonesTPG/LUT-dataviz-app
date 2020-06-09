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

import { useApiUrl } from '../hooks/common';

const DataCard = (props) => {
  const { id } = useParams();
  const API_URL = useApiUrl();

  const GET_DATA_CARD = gql`
    query dataCard($id: ID!) {
      dataCard(id: $id) {
        name
        description
        custom_stat_1
        custom_stat_2
        custom_stat_3
        custom_stat_4
        custom_stat_5
        custom_stat_6
        images {
          url
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA_CARD, {
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
    name,
    description,
    custom_stat_1,
    custom_stat_2,
    custom_stat_3,
    custom_stat_4,
    custom_stat_5,
    custom_stat_6,
    images
  } = data.dataCard;

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
          {name}
        </Text>
        <Text textAlign="center" mt={5}>
          {description}
        </Text>
        {images.length === 1 ? (
          <Image w="100%" mt={3} rounded="md" src={API_URL + images[0].url} />
        ) : (
          <p>no image</p>
        )}

        <Stat textAlign="center">
          <StatLabel>custom 1</StatLabel>
          <StatNumber>{custom_stat_1}</StatNumber>
        </Stat>
        <Stat textAlign="center">
          <StatLabel>custom 2</StatLabel>
          <StatNumber>{custom_stat_2}</StatNumber>
        </Stat>
        <Stat textAlign="center">
          <StatLabel>custom 3</StatLabel>
          <StatNumber>{custom_stat_3}</StatNumber>
        </Stat>
        <Stat textAlign="center">
          <StatLabel>custom 4</StatLabel>
          <StatNumber>{custom_stat_4}</StatNumber>
        </Stat>
        <Stat textAlign="center" t>
          <StatLabel>custom 5</StatLabel>
          <StatNumber>{custom_stat_5}</StatNumber>
        </Stat>
        <Stat textAlign="center" t>
          <StatLabel>custom 6</StatLabel>
          <StatNumber>{custom_stat_6}</StatNumber>
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

export default DataCard;
