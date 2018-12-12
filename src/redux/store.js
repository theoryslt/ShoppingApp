import { createStore } from 'redux';

//tạo state ban đầu
const defaultState = { 
  user: null,
  carts: [],
  types: [],
  topProducts: [],
  searchResult: []
};

//tạo reducer và các action
const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return { ...state, user: action.user };
    
    case 'LOG_OUT':
      return { ...state, user: null };

    case 'FETCH_DATA':
      return {
        ...state,
        types: action.types,
        topProducts: action.topProducts
      };
    
    case 'ADD_CART':
      return {
        ...state, 
        carts: [{
          id: action.id,
          name: action.name,
          price: action.price,
          images: action.images,
          color: action.color,
          description: action.description,
          material: action.material,
          quantity: 1
        }].concat(state.carts)
      };
    
    case 'DELETE':
      return {
        ...state,
        carts: state.carts.filter(pro => pro.id != action.id)
      };

    case 'CHANGE':
      return {
        ...state,
        carts: state.carts.map(e => {
          if(e.id !== action.id) return e;
          return {...e, quantity: action.quantity};
        })
      };
      
    case 'SEARCH':
      return {
        ...state,
        searchResult: action.result
      };
    default: 
    	return state;
  };
};

//tạo store
const store = createStore(reducer);
export default store;