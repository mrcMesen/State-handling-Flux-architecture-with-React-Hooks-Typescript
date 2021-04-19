import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import { Layout } from '../components/Layout';
import { RegisteredPeopleProvider } from '../state/RegisteredPeople';
import '../styles/App.css';

export default function App() {
  return (
    <BrowserRouter>
      <RegisteredPeopleProvider>
        <Layout>
          <Routes />
        </Layout>
      </RegisteredPeopleProvider>
    </BrowserRouter>
  );
}
