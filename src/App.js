import './App.css';
import RouterPage from './Components/Routes/router';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <RouterPage />
      <ToastContainer />
    </div>
  );
}

export default App;
