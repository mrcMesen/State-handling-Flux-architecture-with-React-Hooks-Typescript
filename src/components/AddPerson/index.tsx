import { useState, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { FormEventHandler, ChangeEventHandler } from 'react';
import { ActionType, useRegisteredPeople } from '../../state/RegisteredPeople';
import '../../styles/AddPerson.css';

interface NewPersonForm {
  name: string;
  lastName: string;
  jobTitle: string;
}

const initialForm = {
  name: '',
  lastName: '',
  jobTitle: '',
};

export const AddPerson = (): ReactElement => {
  const [form, setForm] = useState<NewPersonForm>(initialForm);
  const { state, dispatch } = useRegisteredPeople();
  const history = useHistory();

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const lastPerson = state.People[state.People.length - 1];
    const id = lastPerson ? lastPerson.id + 1 : 1;

    dispatch({
      type: ActionType.ADD_PERSON,
      payload: {
        ...form,
        id,
      },
    });

    history.push('/');
  };

  return (
    <section className='AddPerson'>
      <h1>Nuevo Registro</h1>
      <form className='AddPerson-Form' onSubmit={handleSubmit}>
        <div className='AddPerson-Form-Group'>
          <label htmlFor='name'>Name</label>
          <input
            value={form?.name}
            onChange={handleChange}
            type='text'
            name='name'
            id='name'
          />
        </div>
        <div className='AddPerson-Form-Group'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            value={form?.lastName}
            onChange={handleChange}
            type='text'
            name='lastName'
            id='lastName'
          />
        </div>
        <div className='AddPerson-Form-Group'>
          <label htmlFor='jobTitle'>Job Title</label>
          <input
            value={form?.jobTitle}
            onChange={handleChange}
            type='text'
            name='jobTitle'
            id='jobTitle'
          />
        </div>
        <button className='AddPerson-form-button' type='submit'>
          Registrar
        </button>
      </form>
    </section>
  );
};
