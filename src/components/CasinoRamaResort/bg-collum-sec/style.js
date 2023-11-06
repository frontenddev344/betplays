import styled from "@emotion/styled";
import BannerImg from "../../../assest/CasinoRamaResortBlog.jpg";

export const BgCollunmSecWrapper = styled.div`

.BgCollunm{
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: relative;
    margin-top: 95px;
    background-position: center;
    padding: 100px 0;
    background-attachment: fixed;

    &::after{
        position: absolute;
        content: '';
        inset: 0;
        background: rgb(255 255 255 / 90%);
        width: 70%;
    }
 .content {
    position: relative;
    z-index: 9;
    width: 70%;
    .text {
        width: 100%;
        max-width: 940px;
        margin-left: auto;
        padding-left: 20px;
        padding-right: 20px;
        .heading {
            text-align: left;
        }
        p {
            font-size: 22px;
            margin-bottom: 25px;
            color: #383838;
            font-weight: 400;
        }
        ul {
            padding-left: 20px;
            span {
                color: #0ed9a8;
                font-weight: 500;
            }
        }
    }
 }

}

`