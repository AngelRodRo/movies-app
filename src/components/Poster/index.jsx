import React from 'react';
import Styled from 'styled-components';

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

