import React from 'react';

import { gql, useQuery } from '@apollo/client';

import RandomCardSet2 from './cards/RandomCardSet2';
import RandomCardSet1 from './cards/RandomCardSet1';

/*

Application version C: cards are unordered without story elements.

*/

const VersionC = () => {
  /*
    generated with:
    https://www.random.org/sequences/?min=0&max=9&col=1&format=html&rnd=new
  */
  const STATIC_ORDER = [4, 6, 3, 1, 0, 5, 2, 9, 8, 7];

  const GET_ALL_CARDS = gql`
    query allCards {
      husCovidCards {
        id
        name
        description
        timespan
        region
        cases
        order
        image {
          url
        }
        timespan_image {
          url
        }
        map {
          url
        }
      }

      covidCards {
        id
        name
        description
        region
        timespan
        date_of_first_case
        over_65
        cases
        population_density
        chart {
          url
        }
        timespan_image {
          url
        }
        map {
          url
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ALL_CARDS);

  if (loading) return 'Loading...';
  if (error) return `${error.message}`;

  let husCovidCards = [...data.husCovidCards];
  let generalCovidCards = [...data.covidCards];

  //concatenate arrays
  let allCards = [...husCovidCards, ...generalCovidCards];

  //make a new array with random static order
  let staticRandomCards = [];
  STATIC_ORDER.map((randomIndex) => {
    staticRandomCards.push(allCards[randomIndex]);
  });

  let cardSet1 = staticRandomCards.slice(0, 5);
  let cardSet2 = staticRandomCards.slice(5, 10);

  return (
    <>
      <p>application version C</p>
      <RandomCardSet1 cardSet={cardSet1}></RandomCardSet1>
      <RandomCardSet2 cardSet={cardSet2}></RandomCardSet2>
    </>
  );
};

export default VersionC;
