import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { RouterProvider } from 'react-router-dom';
import { router } from "../src/utils/routes";
import { HelmetProvider } from "react-helmet-async";
import CookieConsent from 'react-cookie-consent';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)

  }, []);

  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // },
  //   [pathname]
  // );
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
      <CookieConsent
        debug={true}
        location='bottom'
        style={{
          background: '#000',
        }}
        buttonStyle={{
          background: 'red',
          color: '#000',
        }}
        buttonText="I Accept"
      >
        <h5 className='header-cookis'>This website uses cookies </h5>
        We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.

      </CookieConsent>

    </div>
  );
}

export default App;
