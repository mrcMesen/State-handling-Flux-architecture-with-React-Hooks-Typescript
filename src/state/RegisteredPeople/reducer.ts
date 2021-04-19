import { ActionType, State } from './types';
import { Action } from './actions';

export const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_PERSON:
      const newPerson = action.payload;
      return { People: [...state.People, newPerson] };
    case ActionType.REMOVE_PERSON:
      const id = action.payload;
      return {
        People: state.People.filter(person => person.id !== id),
      };
    default:
      return state;
  }
};
