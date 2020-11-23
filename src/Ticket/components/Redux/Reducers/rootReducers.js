import ticketData from '../ticketData';

import { GET_DATA } from '../Types/types';

const initialState = {
  data: ticketData,
};

export default function rootReduer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA: {
      return state;
    }
    default: {
      return state;
    }
  }
}
