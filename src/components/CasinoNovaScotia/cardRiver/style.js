import styled from "@emotion/styled";
import BannerImg from "../../../assest/roulette.png";


export const CardRiverWRapper = styled.div`

.cardRiver {
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: relative;
    margin-top: 100px;
    padding: 100px 0;
    background-attachment: fixed;
    
    &::after{
        position: absolute;
        content: '';
        inset: 0;
        background: #ffffffd6;
    }
    .cardRiverInner {
        position: relative;
        z-index:9;
        .Text_heading {
            margin-top: 50px;
            text-align: center;
            margin-bottom: 70px;

            p {
                font-size: 22px;
                margin-bottom: 10px;
                margin-top: 0;
                color: #383838;
                font-weight: 400;
            }
        }
        .cardWrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 30px;
            margin-top: 50px;
            align-items: center;
            {
                li {
                    font-family: 'Raleway',sans-serif;
                    font-size: 20px;
                    margin-bottom: 10px;
                    position: relative;
                    span {
                        font-weight: 500;
                        font-size: 22px;
                        margin-right: 5px;
                        color: #0ed9a8;
                    }
                }
            }
        }
        ul {
            padding-left: 25px;
        }
        .imgWrapper {
            img {
                width: 100%;
    height: 400px;
    object-fit: cover;
            }
        }
    }


 
}



`