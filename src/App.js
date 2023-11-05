import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/home/Home";
import CaesarsWindsorHotelCasino from "./container/CaesarsWindsorHotel&Casino/index";
import CasinoduLacLeamy from "./container/CasinoduLacLeamy/index";
import CasinoRamaResort from './container/CasinoRamaResort';
import TheNiagaraFallsviewCasinoResort from './container/TheNiagaraFallsviewCasinoResort';
import CasinoDeMontreal from './container/CasinodeMontreal/Index';
import CasinoNovaScotia from './container/CasinoNovaScotia/Index';
import RiverRockCasinoResort from './container/RiverRockCasinoResort/Index';
import CasinoNewBruBrunswick from './container/CasinoNewBrunswick/Index';
import Contact from './container/Contact/Index';
import { useState, useEffect } from 'react';
import CircleLoader from "react-spinners/CircleLoader";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)

  }, [])
  return (
    <div className="App">
      {
        loading ?
          <CircleLoader
            color={'#0ed9a8'}
            loading={loading}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/CaesarsWindsorHotelCasino" element={<CaesarsWindsorHotelCasino />} />
              <Route path="/CasinoduLacLeamy" element={<CasinoduLacLeamy />} />
              <Route path="/CasinoRamaResort" element={<CasinoRamaResort />} />
              <Route path="/TheNiagaraFallsviewCasinoResort" element={<TheNiagaraFallsviewCasinoResort />} />
              <Route path="/CasinoDeMontreal" element={<CasinoDeMontreal />} />
              <Route path="/RiverRockCasinoResort" element={<RiverRockCasinoResort />} />
              <Route path="/CasinoNovaScotia" element={<CasinoNovaScotia />} />
              <Route path="/CasinoNewBruBrunswick" element={<CasinoNewBruBrunswick />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
      }

    </div>
  );
}

export default App;
