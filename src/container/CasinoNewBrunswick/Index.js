import React from "react";
import { CasinonewbrunsWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CasinoNewBrunswick/banner/Banner";


export default function CasinoNewBruBrunswick() {
    return (
        <>
            <CasinonewbrunsWrapper>
                <Header />
                <SlideBanner />
                <Footer />
            </CasinonewbrunsWrapper>
        </>
    )
}

