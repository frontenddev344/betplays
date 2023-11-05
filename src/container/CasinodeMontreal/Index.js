import React from "react";
import { CasinodeWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CasinodeMontreal/banner/Banner";


export default function CasinoDeMontreal() {
    return (
        <>
            <CasinodeWrapper>
                <Header />
                <SlideBanner />
                <Footer />
            </CasinodeWrapper>
        </>
    )
}

