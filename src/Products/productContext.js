import { createContext, useContext, useReducer } from 'react';
import { productReducer } from './productReducer';

const ProductContext = createContext();

export const initialState = {
  sortBy: null,
  idealFor: [],
  brand: [],
  size: [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
