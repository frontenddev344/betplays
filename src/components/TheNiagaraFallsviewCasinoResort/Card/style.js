import styled from "@emotion/styled";


export const CardWrapper = styled.div`

section.CardWrapper {
    padding: 100px 0;
    background: #f9f9f9;
    .CardInnerWrapper {
        display: grid;
        grid-template-columns: 55% 1fr;
        align-items: center;
        grid-column-gap: 40px;
        height: 100%;
        .img {
            height: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .content {
            .h3 {
                color: #464646;
                font-family: 'Cinzel', serif !important;
                font-size: 28px;
                margin-bottom: 15px;
            }
            p {
                font-family: 'Raleway',sans-serif;
                font-size: 20px;
                margin-bottom: 20px;
            }
            ul {
                padding-left: 25px;
            }
        }
        .whatofferlist li {
            margin-bottom: 15px;
            span {
                font-weight: 600;
                font-size: 22px;
                margin-right: 5px;
            }
        }
    }
}

`