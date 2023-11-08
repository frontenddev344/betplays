import { createBrowserRouter,  matchRoutes,  Navigate,  useLocation } from "react-router-dom";
import { Home, CaesarsWindsorHotelCasino, CasinoduLacLeamy, CasinoRamaResort,  ErrorPage,RiverRockCasinoResort,TheNiagaraFallsviewCasinoResort, CasinoDeMontreal,CasinoNovaScotia,CasinoNewBruBrunswick,Contact,PrivacyPolicy,TermandCondition } from '../container';
const routes = [
{
  path: "/",
  element: <Home />,
  errorElement: <ErrorPage />
},
{
	path: "/CaesarsWindsorHotelCasino",
	element: <CaesarsWindsorHotelCasino />,
	errorElement: <ErrorPage />
},
{
	path: "/CasinoduLacLeamy",
	element: <CasinoduLacLeamy />,
	errorElement: <ErrorPage />
},
{
	path: "/CasinoRamaResort",
	element: <CasinoRamaResort />,
	errorElement: <ErrorPage />
},
{
	path: "/TheNiagaraFallsviewCasinoResort",
	element: <TheNiagaraFallsviewCasinoResort />,
	errorElement: <ErrorPage />
},
{
	path: "/CasinoDeMontreal",
	element: <CasinoDeMontreal />,  
	errorElement: <ErrorPage />
},
{
	path: "/RiverRockCasinoResort",
	element: <RiverRockCasinoResort />,
	errorElement: <ErrorPage />
},
{
	path: "/CasinoNovaScotia",
	element: <CasinoNovaScotia />,
	errorElement: <ErrorPage />
},
{
	path: "/CasinoNewBruBrunswick",
	element: <CasinoNewBruBrunswick />,
	errorElement: <ErrorPage />
},
{
	path: "/Contact",
	element: <Contact />,
	errorElement: <ErrorPage />
},
{
	path: "/PrivacyPolicy",
	element: <PrivacyPolicy />,
	errorElement: <ErrorPage />
},
{
	path: "/TermandCondition",
	element: <TermandCondition />,
	errorElement: <ErrorPage />
},
{
	path: "*",
	element: <ErrorPage />
}
];
  
export const router = createBrowserRouter(routes,  {
	basename: "/betplays",
  });
  
export const useCurrentPath = () => {
    const location = useLocation();
    const [{ pathname }]: any = matchRoutes(routes, location);
    return pathname;
};