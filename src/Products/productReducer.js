export const productReducer = (state, action) => {
  switch (action.type) {
    case 'SORT':
      return { ...state, sortBy: action.payload };
    case 'IDEAL_FOR':
      return { ...state, idealFor: [...state.idealFor, action.payload] };
    case 'REMOVE_IDEAL_FOR':
      return {
        ...state,
        idealFor: state.idealFor.filter(item => item !== action.payload),
      };
    case 'BRAND':
      return { ...state, brand: [...state.brand, action.payload] };
    case 'REMOVE_BRAND':
      return {
        ...state,
        brand: state.brand.filter(item => item !== action.payload),
      };
    case 'SIZE':
      return { ...state, size: [...state.size, action.payload] };
    case 'REMOVE_SIZE':
      return {
        ...state,
        size: state.size.filter(item => item !== action.payload),
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        sortBy: null,
        idealFor: [],
        brand: [],
        size: [],
      };
    default:
      return state;
  }
};
