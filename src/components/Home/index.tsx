import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { useRegisteredPeople } from '../../state/RegisteredPeople';
import PersonCard from './PersonCard';
import '../../styles/Home.css';

export const Home = (): ReactElement => {
  const { state } = useRegisteredPeople();
  const history = useHistory();

  return (
    <section className='Home'>
      <div className='Add-Button'>
        <button onClick={() => history.push('/add-person')}>
          Nuevo Registro
        </button>
      </div>
      <div className='PeopleList'>
        {state.People.map(person => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
};
