import React, { useState } from 'react';
import Styled from 'styled-components';

const StyledStar = Styled.span`
    font-size: 2em;
    color: #ff851b;
    cursor: pointer;
`;

export const Rating = ({ stars, onRated }) => {
    const [value, setValue] = useState(stars);
    const [dynamicValue, setDinamycValue] = useState(stars);

    const handleClick = function (newValue) {
        setValue(newValue);
        setDinamycValue(newValue);

        if (onRated) {
            onRated(newValue);
        }
    };

    const handleMouseEnter = function (newValue) {
        setDinamycValue(newValue);
    };

    const handleMouseLeave = function () {
        setDinamycValue(value);
    };

    const starSpans = [];

    for (let v = 1; v <= 5; v++) {
        if (v <= dynamicValue) {
            starSpans.push(
                <StyledStar
                    key={v}
                    className="star"
                    onMouseEnter={() => handleMouseEnter(v)}
                    onMouseLeave={() => handleMouseLeave(v)}
                    onClick={() => handleClick(v)}
                >
                    ★
                </StyledStar>
            );
        } else {
            starSpans.push(
                <StyledStar
                    key={v}
                    className="star"
                    onMouseEnter={() => handleMouseEnter(v)}
                    onMouseLeave={() => handleMouseLeave(v)}
                    onClick={() => handleClick(v)}
                >
                    ☆
                </StyledStar>
            );
        }
    }

    return <div>{starSpans}</div>;
};