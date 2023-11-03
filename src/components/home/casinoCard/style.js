import styled from "@emotion/styled";

export const CasinoCardWrapper = styled.div`
.casinoCardwrapper {
    .cardTopHeading {
        margin-top: 80px;
        margin-bottom: 120px;
        p {
            font-family: 'Raleway',sans-serif;
            font-size: 20px;
            margin-bottom: 30px;
            text-align: center;
        }
    }
    .cardsec {
        margin-bottom: 65px;

        .headingstyle {
            margin-bottom: 85px;
        }

        .card-body {
            display: grid;
            grid-template-columns: 1fr 50% 1fr;
            align-items: center;
            grid-column-gap: 30px;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px #dfdfdf;
            .card-img {
                img {
                    width: 100%;
                    max-width: 100%;
                    height: 165px;
                    object-fit: cover;
                
                }
            }
        }
        .card-data {
            h5{
                font-size: 18px !important;
                font-weight: 600;
                color: #2c2b2b;
                margin-bottom: 10px;
                font-family: 'Raleway',sans-serif;
            }
            p {
                font-size: 17px;
            }
        }
        .card-link {
            text-align: center;
            a {
                background-color: #0ed9a8;
                padding: 12px 28px;
                color: #fff;
                text-decoration: none;
                font-size: 17px;
                box-shadow: 0px 0px 10px #dfdfdf;
                display: inline-block;
                border: 1px solid transparent;
                transition: .4s;
                &:hover{
                    background: transparent;
                    border-color: #0ed9a8;
                    color: #0ed9a8;
                    box-shadow: 0px 0px 5px 0px #81f4d9;
                }
            }
        }
    }

    
}





`