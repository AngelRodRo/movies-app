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
`;

export const SearchInput = ({
    value,
    placeholder = 'Seach for a movie...',
    onChange = () => {},
}) => {
    return (
        <StyledInput
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
};
