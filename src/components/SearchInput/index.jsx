import React from 'react';
import Styled from 'styled-components';

const StyledInput = Styled.input`
    -webkit-appearance: none;
    outline: none;

    border: 1px solid gray;
    border-radius: 20px;
    padding: 10px 15px;

    width: 400px;

    font-style: italic;

    &:before {
        content: 'x';
    }
`;

export const SearchInput = ({ placeholder = 'Seach for a movie...' }) => {
    return (
        <div>
            <StyledInput placeholder={placeholder} />
        </div>
    )
};
