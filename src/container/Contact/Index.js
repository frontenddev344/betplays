import React from "react";
import { ContactWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/Contact/banner/Banner";
import WhyChoose from "../../components/Contact/why-choose";
import Form from "../../components/Contact/form";
import WhatWeOffer from "../../components/Contact/what-we-offers";


export const Contact = () => {
    return (
        <>
            <ContactWrapper>
                <Header />
                <SlideBanner />
                <WhyChoose />
                <Form />
                <WhatWeOffer />
                <Footer />
            </ContactWrapper>
        </>
    )
}

