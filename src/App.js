import { UserContext } from './components/UserContext';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/Main';


function App() {
  return (
    <div className="App">
      <UserContext.Provider>
        <NavBar />

        <Router>
          <Routes>
            <Route exact path='/' element={<Main />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
