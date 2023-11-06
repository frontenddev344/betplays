import React from "react";
import { CaesarsWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CaesarsWindsorHotel&Casino/banner/Banner";
import WhyChoose from "../../components/CaesarsWindsorHotel&Casino/why-choose";
import GamingExperience from "../../components/CaesarsWindsorHotel&Casino/gaming-experiance/index";
import WhatWeOffer from "../../components/CaesarsWindsorHotel&Casino/what-we-offers/index";
import  Accrodition  from "../../components/CaesarsWindsorHotel&Casino/accordition/index";


export default function CaesarsWindsorHotelCasino() {
    return (
        <>
            <CaesarsWrapper>
                <Header />
                <SlideBanner />
                <WhyChoose />
                <GamingExperience />
                <WhatWeOffer />
                <Accrodition />
                <Footer />
            </CaesarsWrapper>
        </>
    )
}

