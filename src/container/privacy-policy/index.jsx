import React from "react";
import { PrivacyPolicyWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import PrivacyPolicyPage from "../../components/privacy-policy/index";


export default function PrivacyPolicy() {
    return (
        <>
            <PrivacyPolicyWrapper>
                <Header />
                <PrivacyPolicyPage />
                <Footer />
            </PrivacyPolicyWrapper>
        </>
    )
}