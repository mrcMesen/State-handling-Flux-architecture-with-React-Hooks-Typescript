import { Person } from '../../app/types';
import { Action } from './actions';

export enum ActionType {
  ADD_PERSON = 'ADD_PERSON',
  REMOVE_PERSON = 'REMOVE_PERSON',
}

export type Dispatch = (action: Action) => void;

export interface State {
  People: Person[];
}
