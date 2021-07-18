import Styled from 'styled-components';

import { Poster } from 'components/Poster';
import { Rating } from 'components/Rating';

import {
    BG_COLOR,
} from 'constants/colors';

export const StyledList = Styled.div`
    display: flex;
    flex-flow: wrap;

    justify-content: center;
`;

export const StyledPoster = Styled(Poster)`
    margin: 10px;
`;

export const StyledContainer = Styled.div`
    background: ${BG_COLOR};

    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;

export const StyledSearchContainer = Styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;

    width: 400px;

    flex-direction: column;
`;

export const StyledRating = Styled(Rating)`
    margin: 50px 0;
`;

export const StyledTitle = Styled.h1`
    color: white;
    text-align: left;
`;

export const StyledRatingContainer = Styled.div`
    margin-top: 20px;
`;