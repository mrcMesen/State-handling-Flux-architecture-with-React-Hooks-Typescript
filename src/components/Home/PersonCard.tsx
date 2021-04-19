import { ReactElement } from 'react';
import { Person } from '../../app/types';
import { useRegisteredPeople, ActionType } from '../../state/RegisteredPeople';

interface Props {
  person: Person;
}

export default function PersonCard({ person }: Props): ReactElement {
  const { dispatch } = useRegisteredPeople();

  const handleDeletePerson = () => {
    dispatch({ type: ActionType.REMOVE_PERSON, payload: person.id });
  };

  return (
    <div className='PersonCard'>
      <img
        src={`https://ui-avatars.com/api/?background=random&size=128&rounded=true&name=${person.name}+${person.lastName}`}
        alt={`Profile ${person.name} ${person.lastName}`}
        className='PersonCard-Img'
      />
      <h3 className='PersonCard-Name'>
        {person.name} {person.lastName}
      </h3>
      <p className='PersonCard-Job'>{person.jobTitle}</p>
      <button className='PersonCard-Button' onClick={handleDeletePerson}>
        Delete &#10006;
      </button>
    </div>
  );
}
