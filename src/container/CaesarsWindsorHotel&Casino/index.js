import React from "react";
import { CaesarsWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CaesarsWindsorHotel&Casino/banner/Banner";


export default function CaesarsWindsorHotelCasino() {
    return (
        <>
            <CaesarsWrapper>
                <Header />
                <SlideBanner />
                <Footer />
            </CaesarsWrapper>
        </>
    )
}

