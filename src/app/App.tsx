import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import { Layout } from '../components/Layout';
import '../styles/App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}
