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
	path: "/casino-nova-scotia",
	element: <CasinoNovaScotia />,
	errorElement: <ErrorPage />
},
{
	path: "/casino-new-bru-brunswick",
	element: <CasinoNewBruBrunswick />,
	errorElement: <ErrorPage />
},
{
	path: "/contact",
	element: <Contact />,
	errorElement: <ErrorPage />
},
{
	path: "/privacy-policy",
	element: <PrivacyPolicy />,
	errorElement: <ErrorPage />
},
{
	path: "/term-and-condition",
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