import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPoster = Styled.div`
    width: 300px;
    height: 450px;

    background: url('${props => props.src}');
    background-position: center;
`;

export const Poster = ({
    src,
    onClick
}) => {
    const fullPath = `https://image.tmdb.org/t/p/w300${src}`;
    return (
        <StyledPoster
            onClick={onClick}
            src={fullPath}
        />
    );
};

Poster.propTypes = {
    src: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};


