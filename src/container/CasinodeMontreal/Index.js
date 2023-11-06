import React from "react";
import { CasinodeWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CasinodeMontreal/banner/Banner";
import WhyChoose from "../../components/CasinodeMontreal/why-choose";
import Card from "../../components/CasinodeMontreal/Card/index";
import WhatWeOffer from "../../components/CasinodeMontreal/what-we-offers/index"
import WhatWeOfferTwo from "../../components/CasinodeMontreal/what-we-offers-Two";
import Accrodition from "../../components/CasinodeMontreal/accordition";


export default function CasinoDeMontreal() {
    return (
        <>
            <CasinodeWrapper>
                <Header />
                <SlideBanner />
                <WhyChoose />
                <Card />
                <WhatWeOffer />
                <WhatWeOfferTwo />
                <Accrodition />
                <Footer />
            </CasinodeWrapper>
        </>
    )
}

