import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import TermandConditionPage from "../../components/term-and-condition/index"


import { TermandConditionWrapper } from "./style";

export const TermandCondition = () => {
    return (
        <>
            <TermandConditionWrapper>
                <Header />
               <TermandConditionPage />
                <Footer />
            </TermandConditionWrapper>
        </>
    )
}