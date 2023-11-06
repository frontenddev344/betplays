import React from "react";
import { CasinoNovaWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CasinoNovaScotia/banner/Banner";
import Accrodition from "../../components/CasinoNovaScotia/accordition/index"


export default function CasinoNovaScotia() {
    return (
        <>
            <CasinoNovaWrapper>
                <Header />
                <SlideBanner />
                <Accrodition />
                <Footer />
            </CasinoNovaWrapper>
        </>
    )
}

