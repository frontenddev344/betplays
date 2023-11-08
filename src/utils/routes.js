import { createBrowserRouter,  matchRoutes,  Navigate,  useLocation } from "react-router-dom";
import { Home, CaesarsWindsorHotelCasino, CasinoduLacLeamy, CasinoRamaResort,  ErrorPage,RiverRockCasinoResort,TheNiagaraFallsviewCasinoResort, CasinoDeMontreal,CasinoNovaScotia,CasinoNewBruBrunswick,Contact,PrivacyPolicy,TermandCondition } from '../container';
const routes = [
{
  path: "/",
  element: <Home />,
  errorElement: <ErrorPage />
},
{
	path: "/caesars-windsor-hotel-casino",
	element: <CaesarsWindsorHotelCasino />,
	errorElement: <ErrorPage />
},
{
	path: "/casinodu-lac-leamy",
	element: <CasinoduLacLeamy />,
	errorElement: <ErrorPage />
},
{
	path: "/casino-rama-resort",
	element: <CasinoRamaResort />,
	errorElement: <ErrorPage />
},
{
	path: "/the-niagara-fallsview-casino-resort",
	element: <TheNiagaraFallsviewCasinoResort />,
	errorElement: <ErrorPage />
},
{
	path: "/casino-de-montreal",
	element: <CasinoDeMontreal />,  
	errorElement: <ErrorPage />
},
{
	path: "/river-rock-casino-resort",
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