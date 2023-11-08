import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import { ErrorWrapper } from "./style";

export const ErrorPage = () => {
    return(
         <>
         <Helmet>
            <title>Virhe</title>
         </Helmet>
         <ErrorWrapper>
         <Header />
            <h1><span>404 </span> Not Found!</h1>
         <Footer />
         </ErrorWrapper>
         </>
    );
}