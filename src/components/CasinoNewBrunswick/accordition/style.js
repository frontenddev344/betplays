import styled from "@emotion/styled";
export const AccroditionWraspper = styled.div`

section.accordition-wrapper {
    padding: 100px 0;
    background: #fcfbfbd6;
    .css-1elwnq4-MuiPaper-root-MuiAccordion-root:last-of-type {
        border-radius: 2px;
        box-shadow: 0px 0px 10px #dfdfdf;
        padding: 6px 20px;
        .MuiAccordionSummary-content.MuiAccordionSummary-contentGutters {
            p {
                font-family: 'Cinzel', serif !important;
                font-size: 18px;
                color: #81f4d9;
            }
           
        }
        .MuiAccordionSummary-expandIconWrapper {
            svg.MuiSvgIcon-root {
                color: #81f4d9;
            }
        }
    }
    .accrodin-data {
        margin-bottom: 25px;
        li {
            font-size: 17px;
            font-family: 'Raleway', sans-serif !important;

            span {
                font-size: 18px!important;
                font-weight: 600;
                color: #0ed9a8;
                margin-bottom: 10px;
                font-family: 'Raleway',sans-serif;
            }
           
        }
    }
}
.css-o4b71y-MuiAccordionSummary-content {
    margin: 0;
}
section.accordition-wrapper .MuiAccordionSummary-content.MuiAccordionSummary-contentGutters p {

    margin: 0;
}

`