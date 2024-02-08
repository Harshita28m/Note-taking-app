
import './App.css';
import { DashBoard } from './modules/notes/pages/Dashboard';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <DashBoard/>
    </BrowserRouter>
  );
}

export default App;
