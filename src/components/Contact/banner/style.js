import styled from "@emotion/styled";
import BannerImg from "../../../assest/contact-breadcrumb-1.jpg";

export const BannerWrapper = styled.div`

.bannerMain{

    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    width: 100%;
    position: relative;
    margin-top: 95px;
    &::after{
        position: absolute;
        content: '';
        inset: 0;
        background: #0000008c;
    }
    .headingContent {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex-direction: column;
        z-index: 9;
        position: relative;
        .headingstyle {
            text-align: center;
            .img{
                
                img {
                    width: 100%;
                    max-width: 470px;
                }
            }
        }
        h1 {
            color: #0ed9a8;
            font-family: 'Cinzel',serif;
            font-weight: 600;
            font-size: 42px;
        }
        .text {
            font-size: 26px;
            color: #f2f2f2;
            font-family: 'Cinzel', serif;
        }
    }
  

}



`