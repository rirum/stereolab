import styled from "styled-components";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <AppWrapper>
      <Home/>
      
    </AppWrapper>
    </div>
  );
}

export default App;


const AppWrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: #EDF2F4;
`