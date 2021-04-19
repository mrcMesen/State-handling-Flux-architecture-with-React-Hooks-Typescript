import {
  useReducer,
  createContext,
  useContext,
  ReactNode,
  ReactElement,
} from 'react';

import { Reducer } from './reducer';
import { State, Dispatch } from './types';

// Initialize the state
const initialState: State = { People: [] };

// The context that we will create must have its type.
interface ContextType {
  state: State;
  dispatch: Dispatch;
}

// Create the context
const RegisteredPeopleContext = createContext<ContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

// Create the new Provider
export const RegisteredPeopleProvider = ({ children }: Props): ReactElement => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <RegisteredPeopleContext.Provider
      // Send state data
      // Send the dispatcher
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </RegisteredPeopleContext.Provider>
  );
};

export function useRegisteredPeople() {
  const context = useContext(RegisteredPeopleContext);
  if (context === undefined) {
    throw new Error(
      'useCustomizeApp must be used within a CustomizeApp Provider'
    );
  }
  return context;
}
