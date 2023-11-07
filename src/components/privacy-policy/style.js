import styled from "@emotion/styled";

export const PrivacyPolicyWrapper = styled.div`

section.privacywrapper {
    padding: 170px 0 100px;
    .privacy-inner-wrapper
    {
        h2 {
            color: #464646;
            font-family: 'Cinzel', serif !important;
            font-weight: 600;
            font-size: 26px !important;
            margin-bottom: 50px;
            text-align: center;
        }
        p {
            font-family: 'Raleway',sans-serif;
            font-size: 20px;
            margin-bottom: 15px;
        }
        h4 {
            font-size: 26px;
            font-weight: 600;
            color: #2c2b2b;
            margin-bottom: 15px;
            font-family: 'Raleway',sans-serif;
        }
        h5 {
            font-size: 20px;
            font-weight: 600;
            color: #2c2b2b;
            margin-bottom: 15px;
            font-family: 'Raleway',sans-serif;
        }
        li {
            font-family: 'Raleway',sans-serif;
            font-size: 20px;
            margin-bottom: 10px;
            position: relative;
            &:after{
                position: absolute;
                content: '';
                width: 8px;
                height: 8px;
                background: #0ed9a8;
                left: -20px;
                top: 8px;
                border-radius: 50%;
            }
        }
        ul {
            padding-left: 20px;
            li {
                font-family: 'Raleway',sans-serif;
                font-size: 20px;
                margin-bottom: 10px;
            }
        }
        h3 {
            font-weight: 500;
            font-size: 26px;
            margin-bottom: 15px;
        }
        span {
            color: #000000;
            font-weight: 600;
        }
    }
}

`