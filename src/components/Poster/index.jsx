import React, { memo } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPoster = Styled.div`
    width: ${props => props.width}px;
    height: ${props => props.width * 1.5}px;

    background: url('${props => props.src}');
    background-position: center;

    cursor: ${props => props.isClickable? 'pointer' : 'initial'};
`;

export const Poster = memo(({
    src,
    width = '300',
    ...rest
}) => {
    const fullPath = `https://image.tmdb.org/t/p/w${width}${src}`;
    return (
        <StyledPoster
            src={fullPath}
            width={width}
            {...rest}
        />
    );
});

Poster.propTypes = {
    src: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isClickable: PropTypes.bool,
    width: PropTypes.number,
};


