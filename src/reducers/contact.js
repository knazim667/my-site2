import { ADD_CONTACT } from "../actions/types";

const initialState = {
  contacts: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
        loading: false
      };
    default:
      return state;
  }
}
