import React from "react";
import { RiverRockWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/RiverRockCasinoResort/banner/Banner";
import Accrodition from "../../components/CasinoNovaScotia/accordition";
import WhatWeOfferTwo from "../../components/RiverRockCasinoResort/what-we-offers-Two/index";
import WhyChoose from "../../components/RiverRockCasinoResort/why-choose";
import GamingExperience from "../../components/RiverRockCasinoResort/gaming-experiance";

export default function RiverRockCasinoResort() {
    return (
        <>
            <RiverRockWrapper>
                <Header />
                <SlideBanner />
                <WhyChoose />
                <GamingExperience />
                <WhatWeOfferTwo />
                <Accrodition />
                <Footer />
            </RiverRockWrapper>
        </>
    )
}

