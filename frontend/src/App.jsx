import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { Route, Routes } from "react-router-dom";
import './App.css';
import Forms from './components/forms/forms.jsx';
import RoomPage from './pages/RoomPage/RoomPage.jsx';

const App = () => {

  return (
    <BrowserRouter> {/* Wrap your Routes inside BrowserRouter */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Forms />} />
          <Route path="/:roomId" element={<RoomPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
