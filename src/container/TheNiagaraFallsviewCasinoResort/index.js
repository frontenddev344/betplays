import React from "react";
import { RiverRockWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/TheNiagaraFallsviewCasinoResort/banner/Banner";
import WhyChoose from "../../components/TheNiagaraFallsviewCasinoResort/why-choose";
import Card from "../../components/TheNiagaraFallsviewCasinoResort/Card/index";
import WhatWeOfferTwo from "../../components/TheNiagaraFallsviewCasinoResort/what-we-offers-Two/index";
import Accrodition from "../../components/TheNiagaraFallsviewCasinoResort/accordition/index"


export const TheNiagaraFallsviewCasinoResort = () => {
    return (
        <>
            <RiverRockWrapper>
                <Header />
                <SlideBanner />
                <WhyChoose />
                <Card />
                <WhatWeOfferTwo />
                <Accrodition />
                <Footer />
            </RiverRockWrapper>
        </>
    )
}

