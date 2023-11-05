import React from "react";
import { RiverRockWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/RiverRockCasinoResort/banner/Banner";


export default function RiverRockCasinoResort() {
    return (
        <>
            <RiverRockWrapper>
                <Header />
                <SlideBanner />
                <Footer />
            </RiverRockWrapper>
        </>
    )
}

