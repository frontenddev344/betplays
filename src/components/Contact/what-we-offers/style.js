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
            }
        }
    }

.icon-links-wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 150px;
    width: 100%;
    padding-left: 37px;

    .icons{
        width: 55px;
        height: 55px;
        border: 1px solid;
        border-style: dashed;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        border-radius: 50pc;
        border-color: #0ed9a8;
        background: #defff7;
        cursor: pointer;
        box-shadow: 0px 0px 10px darkgrey;
        -webkit-transition: .5s;
        transition: .5s;

        svg
        {
            font-size: 22px;
            color: #353535;
            -webkit-transition: .5s;
            transition: .5s;
        }
        &:hover
        {
            transform: translateY(-5px);
        }
        &:hover svg{
            color: #0ed9a8;
        }
    }
}
.btm-text {
    p {
        font-family: 'Raleway',sans-serif;
        font-size: 20px;
        margin-top: 30px;
    }
}
  
}



`