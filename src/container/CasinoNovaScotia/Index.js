import React from "react";
import { CasinoNovaWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CasinoNovaScotia/banner/Banner";
import WhyChoose from "../../components/CasinoNovaScotia/why-choose";
import Accrodition from "../../components/CasinoNovaScotia/accordition/index"
import CardRiver from "../../components/CasinoNovaScotia/cardRiver";
import WhatWeOfferTwo from "../../components/CasinoNovaScotia/what-we-offers-Two/index";
import WhatWeOffer from "../../components/CasinoNovaScotia/what-we-offers/index";



export default function CasinoNovaScotia() {
    return (
        <>
            <CasinoNovaWrapper>
                <Header />
                <SlideBanner />
                <WhyChoose />
                <CardRiver />
                <WhatWeOfferTwo />
                <WhatWeOffer />
                <Accrodition />
                <Footer />
            </CasinoNovaWrapper>
        </>
    )
}

