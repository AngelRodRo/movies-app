import React, { memo } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPoster = Styled.div`
    width: 300px;
    height: 450px;

    background: url('${props => props.src}');
    background-position: center;

    cursor: ${props => props.isClickable? 'pointer' : 'initial'};
`;

export const Poster = memo(({
    src,
    ...rest
}) => {
    const fullPath = `https://image.tmdb.org/t/p/w300${src}`;
    return (
        <StyledPoster
            src={fullPath}
            {...rest}
        />
    );
});

Poster.propTypes = {
    src: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isClickable: PropTypes.bool,
};


