import {template} from '@babel/core';
import date_types from './date_types';
const initialState = {
  items: [
    {
      id: 1,
      name: 'Green Seedless Grapes',
      price: 2.47,
      image: require('../../assets/graps.png'),
      inCart: false,
      count: 0,
      isLike: false,
    },
    {
      id: 2,
      name: 'Lemons',
      price: 3.47,
      image: require('../../assets/lemon.png'),
      inCart: false,
      count: 0,
      isLike: false,
    },
    {
      id: 3,
      name: 'Oranges',
      price: 2.47,
      image: require('../../assets/orange.png'),
      inCart: false,
      count: 0,
      isLike: false,
    },
    {
      id: 4,
      name: 'Green Seedless Grapes',
      price: 2.47,
      image: require('../../assets/graps.png'),
      inCart: false,
      count: 0,
      isLike: false,
    },
    {
      id: 5,
      name: 'Bananas',
      price: 2.47,
      image: require('../../assets/banana.png'),
      inCart: false,
      count: 0,
      isLike: false,
    },
    {
      id: 6,
      name: 'Pineapples',
      price: 4.47,
      image: require('../../assets/pineapple.png'),
      inCart: false,
      count: 0,
      isLike: false,
    },
    {
      id: 7,
      name: 'Green Seedless Grapes',
      price: 2.47,
      image: require('../../assets/graps.png'),
      inCart: false,
      count: 0,
      isLike: false,
    },
    {
      id: 8,
      name: 'Green Seedless Grapes',
      price: 2.47,
      image: require('../../assets/graps.png'),
      inCart: false,
      count: 0,
      isLike: false,
    },
    {
      id: 9,
      name: 'Lemons',
      price: 3.47,
      image: require('../../assets/lemon.png'),
      inCart: false,
      count: 0,
      isLike: false,
    },
    {
      id: 10,
      name: 'Oranges',
      price: 2.47,
      image: require('../../assets/orange.png'),
      inCart: false,
      count: 0,
      isLike: false,
    },
  ],
};
const DateReducer = (state = initialState, action) => {
  switch (action.type) {
    case date_types.LIKEITEM:
      return {
        ...state,
        items: state.items.map(i => {
          return i.id == action.id ? {...i, isLike: !i.isLike} : i;
        }),
      };

    case date_types.ADDTOCART:
      return {
        ...state,
        items: state.items.map(i => {
          return i.id == action.id ? {...i, inCart: true, count: 1} : i;
        }),
      };
    case date_types.PLUSITEM:
      return {
        ...state,
        items: state.items.map(i => {
          return i.id == action.id ? {...i, count: i.count + 1} : i;
        }),
      };
    case date_types.MINUSITEM:
      return {
        ...state,
        items: state.items.map(i => {
          return i.id == action.id
            ? {
                ...i,
                count: i.count - 1,
                inCart: i.count - 1 == 0 ? false : true,
              }
            : i;
        }),
      };
    case date_types.CLEARCART:
      return {
        ...state,
        items: state.items.map(i => {
          return {
            ...i,
            count: 0,
            inCart: false,
          };
        }),
      };

    default:
      return state;
  }
};

export default DateReducer;
