import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledParagraph = Styled.p`
    font-family: 'Roboto';
`;

const StyledContainer = Styled.div`
    display: flex;
`;

const StyledIconContainer = Styled.div`
    align-self: center;

    margin: 0 10px;
`;

export const SectionHeader = ({ title, children }) => {
    return (
        <StyledContainer>
            <StyledIconContainer>
                {children}
            </StyledIconContainer>
            <StyledParagraph>
                {title}
            </StyledParagraph>
        </StyledContainer>
    );
};

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any,
};