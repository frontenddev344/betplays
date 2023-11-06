import styled from "@emotion/styled";
import BannerImg from "../../../assest/bg-img.jpg";
export const WhatWeOfferWrapper = styled.div`

.whatofferwrapper {
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
    padding: 100px 0;
    &::after{
        position: absolute;
        content: '';
        inset: 0;
        background: #ffffff8c;
    }
    .whatofferInnerwrapper {
        position: relative;
        z-index: 9;

        .heading {
            span {
                position: absolute;
                font-size: 192px;
                transform: translate(-50%, -50%);
                left: 50%;
                top: 50%;
                z-index: -1;
                color: #c1fff04a;
            }
        }
        .whatofferlist {
            li {
                font-family: 'Raleway',sans-serif;
                font-size: 20px;
                margin-bottom: 30px;
                span {
                    font-weight: 600;
                    font-size: 22px;
                    margin-right: 10px;
                    border-bottom: 2px solid #81f4d9;
                    display: inline-block;
                    border-style: dotted;
                    border-top: 0;
                    border-right: 0;
                    border-left: 0;
                }
                .secondtext {
                    font-family: 'Raleway',sans-serif;
                    font-size: 20px;
                    border-bottom: 0px;
                    font-weight: 400;
                    margin-top: 20px;
                }
            }
        }
    }

    .dataContent p {
        font-size: 22px;
        margin-bottom: 25px;
        margin-top: 35px;
        color: #383838;
        font-weight: 400;
        text-align: center;
    }
  
}



`