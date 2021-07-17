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

export const Navbar = () => {
    return (
        <StyledContainer>
            <StyledLeftContainer>
                <img />
            </StyledLeftContainer>
            <StyledRightContainer>
                <button>Login</button>
                <button>Sign up</button>
            </StyledRightContainer>
        </StyledContainer>
    )
};


