import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { FaFire } from 'react-icons/fa';

const StyledParagraph = Styled.p`
    font-family: 'Roboto';
`;

const StyledContainer = Styled.div`
    display: flex;
`;

const StyledIconContainer = Styled.div`
    align-self: center;
`;


export const SectionHeader = ({ title, iconSrc }) => {
    return (
        <StyledContainer>
            <StyledIconContainer>
                <FaFire />
            </StyledIconContainer>
            <StyledParagraph>
                {title}
            </StyledParagraph>
        </StyledContainer>
    );
};

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    iconSrc: PropTypes.string.isRequired,
};