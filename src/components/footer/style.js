import styled from "@emotion/styled";
import BannerImg from "../../assest/14206.jpg";

export const FooterWrapper = styled.div`

.footerwrapper {
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: relative;
    padding: 100px 0 0 0;
    &::after{
        position: absolute;
        content: '';
        inset: 0;
        background: #ffffffed;
    }
    .footerInnerWrapper {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-column-gap: 25px;
        position: relative;
        z-index: 9;
        .logo {
            img {
                width: 100%;
                max-width: 150px;
            }
        }
        .address-Bar {
            margin-top: 20px;
            p {
                font-size: 17px;
                margin-bottom: 10px;
                span {
                    font-weight: 600;
                }
            }
          
        }
        .menu {
            ul.headerNav {
                padding: 0;
                text-align: center;
                li {
                    margin-bottom: 20px;
                    a {
                        font-weight: 600;
                        color: #464646;
                        transition: .4s;
                        &:hover {
                            color: #0ed9a8;
                        }
                    }
                }
               
            }
          
        }
        .footer-head {
            font-size: 22px;
            font-weight: 600;
            color: #2c2b2b;
            font-family: 'Raleway', sans-serif;
            text-align: center;
            margin-bottom: 30px;
        }
        .icon-links-wrapper {
            display: flex;
            justify-content: space-between;
            .icons {
                width: 55px;
                height: 55px;
                border: 1px solid;
                border-style: dashed;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50pc;
                border-color: #0ed9a8;
                background: #defff7;
                cursor: pointer;
                box-shadow: 0px 0px 10px darkgrey;
                transition: .5s;

                svg {
                    font-size: 22px;
                    color: #353535;
                    transition: .5s;                   
                }
                &:hover svg {
                    color: #0ed9a8;
                }
                &:hover {
                    transform: translateY(-5px);
                }
            }

        }
    }
    .bottom-footer {
        padding: 20px 0;
        text-align: center;
        border-top: 1px solid #b0ffec;
        z-index: 9;
        position: relative;
        margin-top: 35px;
    }
}

`

