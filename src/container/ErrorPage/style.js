import styled  from "@emotion/styled";


export const ErrorWrapper = styled.section`
    h1{
        padding:60px;
        height:100%;
        text-align:center;
        font-size:60px;
        margin-bottom:0;
        display:flex;
        align-items:center;
        justify-content:center;
        span{
            color: var(--primary-color);
            padding-right:20px;
            font-size:70px;
        }
    }
    footer{
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
    }
`