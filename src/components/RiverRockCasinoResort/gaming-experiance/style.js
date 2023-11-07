import styled from "@emotion/styled";
export const GamingExperienceWraspper = styled.div`

.gaming-wrapper {
    display: grid;
    grid-template-columns:1fr 45% ;
    grid-column-gap: 35px;
    align-items: center;
    background: #f9f9f9;
    padding: 100px 0;
    .gaming-img {
        .img {
            img{
                width: 100%;
                height: 500px;
                object-fit: cover;

            }
        }
    }
    .gaming-content {
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        grid-column-gap: 20px;
        .gaming-text {
            .headingstyle {
                .heading {
                    font-size: 28px !important;
                   span {
                        font-size: 115px;
                    }
                }
            }
            .text{
                font-size: 22px;
                margin-bottom: 25px;
                margin-top: 35px;
                color: #383838;
                font-weight: 400;
                font-family: 'Raleway', sans-serif !important;
                margin-top: 40px;
            }
        }
        .gaming-counting-wrapper {
            display: flex;
            justify-content: center;
            .gaming-counting {
            border: 1px solid #0ed9a8;
            height: 350px;
            width: 80px;
            position: relative;
            background-color: #0ed9a8;
            box-shadow: 5px 5px 10px #dfdfdf;
            marquee {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                p {
                
                    text-transform: capitalize;
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    font-size: 40px;
                    color: #ffffff;
                    font-family: 'Cinzel', serif !important;
                    transform: scale(-1);
                }
                }
          
            }
        }
    }
    .text.mt {
        margin-top: 10px !important;
        margin-bottom: 10px !important;
    }
    .loopData {
        margin: 25px 0;
        ul{
            padding: 0;
            li {
                font-size: 19px;
                margin-bottom: 10px;
                margin-top: 10px;
                color: #383838;
                font-weight: 400;
                font-family: 'Raleway',sans-serif!important;
                span {
                    font-weight: 500;
                    color: #0ed9a8;
                }
            }
        }
    }
    .heading {
        text-align: left;
    }
    .headingstyle {
        text-align: left;
    }
}

`