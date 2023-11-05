import React from "react";
import { CasinoRamaWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CasinoRamaResort/banner/Banner";


export default function CasinoRamaResort() {
    return (
        <>
            <CasinoRamaWrapper>
                <Header />
                <SlideBanner />
                <Footer />
            </CasinoRamaWrapper>
        </>
    )
}

