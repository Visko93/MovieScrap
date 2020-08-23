import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes/routes';

import Header from "./components/Comum/Header";
import Footer from "./components/Comum/Footer";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
     
    </>
  );
}

export default App;
