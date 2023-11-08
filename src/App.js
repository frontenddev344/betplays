import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { RouterProvider} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { router } from "../src/utils/routes";
import {HelmetProvider } from "react-helmet-async";

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
          <HelmetProvider>
          <RouterProvider router={router} />
          </HelmetProvider>
      }

    </div>
  );
}

export default App;
