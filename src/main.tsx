import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './routes/Main';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
