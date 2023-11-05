import React from "react";
import { CasinodulacWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CasinoduLacLeamy/banner/Banner";


export default function CasinoDuLacLeamy() {
    return (
        <>
            <CasinodulacWrapper>
                <Header />
                <SlideBanner />
                <Footer />
            </CasinodulacWrapper>
        </>
    )
}

