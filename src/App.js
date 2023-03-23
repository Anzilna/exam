import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import Addmov from './components/Addmov';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Movie/>
     <Addmov/>
    </div>
  );
}

export default App;
