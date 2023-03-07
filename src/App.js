import logo from "./logo.svg";
import "./App.css";
import Landing from "./Pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar1 from "./Components/Navbar1";
import Form from "./Pages/Form";
import Footer from "./Components/Footer";


function App() {





  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar1 data={data}/> */}
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
      <Footer/>



      </BrowserRouter>



    </div>
  );
}

export default App;
