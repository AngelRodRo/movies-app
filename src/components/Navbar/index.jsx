import React from 'react';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
    display: flex;
    position: absolute;
    margin: 0 20px;
`;

const StyledLeftContainer = Styled.div`
`;

const StyledRightContainer = Styled.div`
    display: flex;
`;

const StyledButton = Styled.a`
    background: none;
    outline: none;

    color: white;

    margin: 10px;

    cursor: pointer;
`;

export const Navbar = () => {
    return (
        <StyledContainer>
            <StyledLeftContainer>
            </StyledLeftContainer>
            <StyledRightContainer>
                <StyledButton>Login</StyledButton>
                <StyledButton>Sign up</StyledButton>
            </StyledRightContainer>
        </StyledContainer>
    )
};


