import React from "react";
import { ContactWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/Contact/banner/Banner";


function Contact() {
    return (
        <>
            <ContactWrapper>
                <Header />
                <SlideBanner />
                <Footer />
            </ContactWrapper>
        </>
    )
} export default Contact;

