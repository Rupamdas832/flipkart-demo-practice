export const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case 'PRICE_LOW_TO_HIGH':
      return products.sort((a, b) => a.price - b.price);
    case 'PRICE_HIGH_TO_LOW':
      return products.sort((a, b) => b.price - a.price);
    default:
      return products;
  }
};

export const filterByGender = (products, genderList) => {
  if (genderList.length === 0) {
    return products;
  } else {
    let newProducts = [];
    genderList.map(singleGender => {
      const foundGenders = products.filter(
        product => product.idealFor === singleGender
      );
      if (foundGenders) {
        foundGenders.map(item => newProducts.push(item));
      }
    });
    return newProducts;
  }
};

export const filterByBrand = (products, brandList) => {
  if (brandList.length === 0) {
    return products;
  } else {
    let newProducts = [];
    brandList.map(singleBrand => {
      const foundBrands = products.filter(
        product => product.brand === singleBrand
      );
      if (foundBrands) {
        foundBrands.map(item => newProducts.push(item));
      }
    });
    return newProducts;
  }
};

export const filterBySize = (products, sizeList) => {
  if (sizeList.length === 0) {
    return products;
  } else {
    let newProducts = [];
    sizeList.map(singleSize => {
      const foundSizes = products.filter(
        product => product.size === singleSize
      );
      if (foundSizes) {
        foundSizes.map(item => newProducts.push(item));
      }
    });
    return newProducts;
  }
};
