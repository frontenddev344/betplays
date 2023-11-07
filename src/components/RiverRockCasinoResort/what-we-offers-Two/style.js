import styled from "@emotion/styled";
import BannerImg from "../../../assest/CasinoRamaResortBlog.jpg";
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
        background: #ffffffe6;  
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
            margin-top: 60px;
            li {
                font-family: 'Raleway',sans-serif;
                font-size: 20px;
                margin-bottom: 30px;
                position: relative;
                &::after{
                    position: absolute;
                    content: '';
                    width: 8px;
                    height: 8px;
                    background: #0ed9a8;
                    left: -25px;
                    top: 10px;
                    border-radius: 50%;
                    -webkit-animation: 2s grow ease-in-out infinite;
                    animation: 2s grow ease-in-out infinite;
                }
                span {
                    font-weight: 600;
                    font-size: 22px;
                    margin-right: 10px;
                    // border-bottom: 2px solid #81f4d9;
                    // display: inline-block;
                    // border-style: dotted;
                    // border-top: 0;
                    // border-right: 0;
                    // border-left: 0;
                }
            }
        }
    }
   
  
}
.dataContent {
    text-align: center;
    margin-top: 20px;
    .dataContentText {
        font-size: 22px;
        margin-bottom: 25px;
        margin-top: 35px;
        color: #383838;
        font-weight: 400;
    }
}
.headingstyle.repeat-sec {
    margin-top: 100px;
}
.dataContent.top .dataContentText {
    margin-top: 10px;
}
.whatofferwrapper .whatofferInnerwrapper .whatofferlist {
    margin-top: 20px;
}


`