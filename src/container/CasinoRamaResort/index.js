import React from "react";
import { CasinoRamaWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CasinoRamaResort/banner/Banner";
import WhyChoose from "../../components/CasinoRamaResort/why-choose/index";
import BgCollunmSec from "../../components/CasinoRamaResort/bg-collum-sec";
// import Card from "../../components/CasinoRamaResort/Card/index";
import GamingExperience from "../../components/CasinoRamaResort/gaming-experiance";
import WhatWeOfferTwo from "../../components/CasinoRamaResort/what-we-offers-Two";
import Accrodition from "../../components/CasinoRamaResort/accordition";
import { tabTitle } from "../../utils/GenralFunction";

export const CasinoRamaResort = () => {
    tabTitle('Casino Rama Resort')
    return (
        <>
            <CasinoRamaWrapper>
                <Header />
                <SlideBanner />
                <WhyChoose />
                <BgCollunmSec />
                {/* <Card /> */}
                <GamingExperience />
                <WhatWeOfferTwo />
                <Accrodition />
                <Footer />
            </CasinoRamaWrapper>
        </>
    )
}

