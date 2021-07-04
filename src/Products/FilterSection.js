import React, { useRef, useState } from 'react';
import {
  Flex,
  Spacer,
  Box,
  Image,
  Badge,
  RadioGroup,
  Stack,
  Radio,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import { useProduct } from './productContext';
const FilterSection = () => {
  const { state, dispatch } = useProduct();
  const { sortBy, brand, size, idealFor } = state;

  const toggleBrandCheckbox = (element, brandName) => {
    if (element.checked) {
      dispatch({ type: 'BRAND', payload: brandName });
    } else dispatch({ type: 'REMOVE_BRAND', payload: brandName });
  };

  const toggleGenderCheckbox = (element, brandName) => {
    if (element.checked) {
      dispatch({ type: 'IDEAL_FOR', payload: brandName });
    } else dispatch({ type: 'REMOVE_IDEAL_FOR', payload: brandName });
  };

  const toggleSizeCheckbox = (element, sizeName) => {
    if (element.checked) {
      dispatch({ type: 'SIZE', payload: sizeName });
    } else dispatch({ type: 'REMOVE_SIZE', payload: sizeName });
  };

  const clearAllFilter = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  return (
    <Flex direction="column">
      <h1 style={{ marginTop: '2rem', fontWeight: 'bold' }}>Sort By:</h1>
      <Flex direction="column" bg="gray.100" padding="2" marginY="2">
        <Flex direction="row" alignItems="center">
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: 'SORT', payload: 'PRICE_LOW_TO_HIGH' })
            }
            checked={sortBy && sortBy === 'PRICE_LOW_TO_HIGH'}
          />
          <label>Price Low to High</label>
        </Flex>
        <Flex direction="row" alignItems="center">
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: 'SORT', payload: 'PRICE_HIGH_TO_LOW' })
            }
            checked={sortBy && sortBy === 'PRICE_HIGH_TO_LOW'}
          />
          <label>Price High to Low</label>
        </Flex>
      </Flex>

      <h1 style={{ marginTop: '2rem', fontWeight: 'bolder' }}>Filter By:</h1>
      <Flex direction="column" bg="gray.100" padding="2" marginY="2">
        <h2>Ideal For</h2>
        <Flex direction="row" alignItems="center">
          <input
            type="checkbox"
            onChange={e => toggleGenderCheckbox(e.target, 'Women')}
            checked={idealFor.length > 0 && idealFor.includes('Women')}
          />
          <label>Women</label>
        </Flex>

        <Flex direction="row" alignItems="center">
          <input
            type="checkbox"
            onChange={e => toggleGenderCheckbox(e.target, 'Men')}
            checked={idealFor.length > 0 && idealFor.includes('Men')}
          />
          <label>Men</label>
        </Flex>
      </Flex>
      <Flex direction="column" bg="gray.100" padding="2" marginY="2">
        <h2>Brand</h2>
        <Flex direction="row" alignItems="center">
          <input
            type="checkbox"
            onChange={e => toggleBrandCheckbox(e.target, 'Levis')}
            checked={brand.length > 0 && brand.includes('Levis')}
          />
          <label>Levis</label>
        </Flex>

        <Flex direction="row" alignItems="center">
          <input
            type="checkbox"
            onChange={e => toggleBrandCheckbox(e.target, 'Zara')}
            checked={brand.length > 0 && brand.includes('Zara')}
          />
          <label>Zara</label>
        </Flex>

        <Flex direction="row" alignItems="center">
          <input
            type="checkbox"
            onChange={e => toggleBrandCheckbox(e.target, 'Wrangler')}
            checked={brand.length > 0 && brand.includes('Wrangler')}
          />
          <label> Wrangler</label>
        </Flex>
        <Flex direction="row" alignItems="center">
          <input
            type="checkbox"
            onChange={e => toggleBrandCheckbox(e.target, 'Diesel')}
            checked={brand.length > 0 && brand.includes('Diesel')}
          />
          <label>Diesel</label>
        </Flex>
      </Flex>
      <Flex direction="column" bg="gray.100" padding="2" marginY="2">
        <h2>Size</h2>
        <Flex direction="row" alignItems="center">
          <input
            type="checkbox"
            onChange={e => toggleSizeCheckbox(e.target, 'S')}
            checked={size.length > 0 && size.includes('S')}
          />
          <label>S</label>
        </Flex>

        <Flex direction="row" alignItems="center">
          <input
            type="checkbox"
            onChange={e => toggleSizeCheckbox(e.target, 'M')}
            checked={size.length > 0 && size.includes('M')}
          />
          <label> M</label>
        </Flex>
        <Flex direction="row" alignItems="center">
          <input
            type="checkbox"
            onChange={e => toggleSizeCheckbox(e.target, 'L')}
            checked={size.length > 0 && size.includes('L')}
          />
          <label>L</label>
        </Flex>
      </Flex>
      <Button onClick={clearAllFilter} bg="green.200">
        Clear all
      </Button>
    </Flex>
  );
};

export default FilterSection;
