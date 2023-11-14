import React from "react";
import { CasinodulacWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CasinoduLacLeamy/banner/Banner";
import WhyChoose from "../../components/CasinoduLacLeamy/why-choose/index";
import WhatWeOffer from "../../components/CasinoduLacLeamy/what-we-offers/index";
import GamingExperience from "../../components/CasinoduLacLeamy/gaming-experiance/index";
import WhatWeOfferTwo from "../../components/CasinoduLacLeamy/what-we-offers-Two/index";
import Accrodition from "../../components/CasinoduLacLeamy/accordition/index";
import { tabTitle } from "../../utils/GenralFunction";

export const CasinoduLacLeamy = () => {
    tabTitle('Casino Du LacLeamy');
    return (
        <>
            <CasinodulacWrapper>
                <Header />
                <SlideBanner />
                <WhyChoose />
                <WhatWeOffer />
                <GamingExperience />
                <WhatWeOfferTwo />
                <Accrodition />
                <Footer />
            </CasinodulacWrapper>
        </>
    )
}

