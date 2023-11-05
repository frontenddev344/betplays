import React from "react";
import { CasinoNovaWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CasinoNovaScotia/banner/Banner";


export default function CasinoNovaScotia() {
    return (
        <>
            <CasinoNovaWrapper>
                <Header />
                <SlideBanner />
                <Footer />
            </CasinoNovaWrapper>
        </>
    )
}

