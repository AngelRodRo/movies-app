import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPoster = Styled.div`
    width: 200px;
    height: 350px;

    background: url('${props => props.src}');
    background-position: center;
`;

export const Poster = ({ 
    src,
    onClick
}) => {
    return (
        <StyledPoster
            onClick={onClick}
            src={src}
        />
    );
};

Poster.propTypes = {
    src: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};


