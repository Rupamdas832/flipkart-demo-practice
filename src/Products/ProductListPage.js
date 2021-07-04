import React from 'react';
import {
  Flex,
  Spacer,
  Box,
  Image,
  Badge,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';
import productData from '../data.json';
import FilterSection from './FilterSection';
import {
  filterByBrand,
  filterByGender,
  filterBySize,
  sortProducts,
} from './utills';
import { useProduct } from './productContext';

const ProductListPage = () => {
  const { state } = useProduct();
  const { sortBy, idealFor, brand, size } = state;

  const sortedProducts = sortProducts(productData.products, sortBy);
  const filterProductsByIdealFor = filterByGender(sortedProducts, idealFor);
  const filterProductsByBrand = filterByBrand(filterProductsByIdealFor, brand);
  const filterProductsBySize = filterBySize(filterProductsByBrand, size);

  return (
    <Flex>
      <Flex direction="column" width="25%" padding="5">
        <FilterSection />
      </Flex>
      <Flex direction="column">
        <h1>Products</h1>
        <Flex direction="row" wrap="wrap">
          {filterProductsBySize.map(product => {
            const { _id, name, img, desc, price, size, idealFor, brand } =
              product;
            return (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                key={_id}
                marginX="2"
              >
                <Image src={img} alt="product" maxH="100%" />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      {brand}
                    </Badge>
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      {idealFor}
                    </Badge>
                    {size}
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {name}
                  </Box>

                  <Box>{price}</Box>

                  <Box d="flex" mt="2" alignItems="center">
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {desc}
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductListPage;
