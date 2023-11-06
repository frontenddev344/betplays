import styled from "@emotion/styled";

export const FormWrapper = styled.div`
section.formBar {
    padding: 100px 0;
    background: #f9f9f9;
    .inner {
        width: 100%;
        max-width: 650px;
        margin: 0 auto;
         form {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                input.name {
                    width: 43%;
                }
                .fullW {
                    width: 100%;
                }
                input,
                textarea {
                    padding: 15px;
                    margin-bottom: 30px;
                    border-radius: 5px;
                    box-shadow: 0px 0px 10px #d8ede882;
                    border: 1px solid #0ed9a8;
                }
                ::placeholder {
                    color: #464646;
                    font-family: 'Cinzel', serif !important;
                    font-size: 15px;
                }
        }
    }
}

`