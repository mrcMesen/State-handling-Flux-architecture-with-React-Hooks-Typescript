import { Person } from '../../app/types';
import { ActionType } from './types';

export type Action =
  | { type: ActionType.ADD_PERSON; payload: Person }
  | { type: ActionType.REMOVE_PERSON; payload: number };
