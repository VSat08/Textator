import { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');
  const [modeText, setmodeText] = useState('dark');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      setmodeText('light');

    }
    else {
      setmode('light');
      setmodeText('dark');
    }
  };


  return (
    <div className={`text-${modeText} bg-${mode}`} id='bg'>
      <BrowserRouter>


        <Navbar title='Textator' mode={mode} modeText={modeText} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className={`container my-3 text-${modeText} bg-${mode}`}>
          <Routes>

            <Route index path="/Textator" element={<TextForm heading='Enter Text to analyze' showAlert={showAlert} />} />
            <Route path="/about" element={<About modeText={modeText} mode={mode} />} />



          </Routes>



        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
