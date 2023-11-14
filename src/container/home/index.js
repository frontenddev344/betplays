import React from "react";
import { HomeWrapper } from "./style";
import Header from "../../components/header/Header";
import SlideBanner from "../../components/home/banner/Banner";
import WhyChoose from "../../components/home/why-choose/index";
import WhatWeOffer from "../../components/home/what-we-offers";
import CasinoCard from "../../components/home/casinoCard";
import Disclaimer from "../../components/home/disclaimer";
import Footer from "../../components/footer";
import { tabTitle } from "../../utils/GenralFunction";


export const Home = () => {
    tabTitle('Home');
    return (
        <>
            <HomeWrapper>
                <Header />
                <SlideBanner />
                <WhyChoose />
                <WhatWeOffer />
                <CasinoCard />
                <Disclaimer />
                <Footer />
            </HomeWrapper>
        </>
    )
}