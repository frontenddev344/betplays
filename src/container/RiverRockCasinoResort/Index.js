import React from "react";
import { RiverRockWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/RiverRockCasinoResort/banner/Banner";
import Accrodition from "../../components/CasinoNovaScotia/accordition";


export default function RiverRockCasinoResort() {
    return (
        <>
            <RiverRockWrapper>
                <Header />
                <SlideBanner />
                <Accrodition />
                <Footer />
            </RiverRockWrapper>
        </>
    )
}

