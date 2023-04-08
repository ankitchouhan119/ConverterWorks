
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>

    <Router>
   <Navbar title = "ConverterWorks" about = "About Us"/>
    <div className="container my-3">
      <Routes>
        <Route path="/" element={ <TextForm heading = "Enter the text to analyze below"/> } />
        <Route path="About" element={ <About/> } />
      </Routes>
    </div>
    </Router>

    </>
  );
}

export default App;
