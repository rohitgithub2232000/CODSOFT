import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import headerImage from '../images/header.jpeg';

const Header = () => {

    const StyleHeader = styled(Box) (({theme}) => (
        {
            display: "flex",
            justifyContent: "center",
            minHeight: 400,
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: theme.palette.secondary.main
        }
    )
    )
    return(
        <StyleHeader >

        </StyleHeader>
        
    )
}
export default Header