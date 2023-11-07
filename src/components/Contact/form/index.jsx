import React from "react";
import { Box, Container } from "@mui/material";
import { FormWrapper } from "./style";

export default function Form() {
    return (
        <>
            <FormWrapper>
                <Box className="formBar" component="section">
                    <Container>
                        <Box className="inner">
                            <form action="">
                                <input type="text" className="" placeholder="First Name" class="name" />
                                <input type="text" className="" placeholder="Last Name" class="name" />
                                <input type="text" className="" placeholder="Email" class="fullW" />
                                <textarea name="" cols="30" rows="10" class="fullW" placeholder="Message . . ."></textarea>
                            </form>
                        </Box>
                    </Container>
                </Box>
            </FormWrapper>
        </>
    )
}