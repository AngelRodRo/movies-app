import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Styled from 'styled-components';

import {
    BG_COLOR,
    TEXT_COLOR,
} from 'constants/colors';

import { Poster } from 'components/Poster';

import { getMovieDetails } from 'api';

const StyledContainer = Styled.div`
    display: flex;

    color: ${TEXT_COLOR};
    background-color: ${BG_COLOR};

    padding: 50px 100px;

    height: 100vh;
`;

const StyledPosterContainer = Styled.div`
    margin: 0 20px;
`;

const StyledDetailsContainer = Styled.div`
    margin: 0 10px;
`;


export default function Movie() {
    const { id } = useParams();
    const [{
        title: original_title,
        overview,
        poster_path: posterPath,
        release_date: releaseDate,
        status,
    }, setMovie] = useState({
        original_title: '',
        overview: '',
        poster_path: '',
        status: '',
    });

    useEffect(() => {
        const doGetMovieDetails = async () => {
            try {
                const result = await getMovieDetails(id);
                setMovie(result);
            } catch (error) {

            }
        };

        doGetMovieDetails();
    }, [id]);

    return (
        <StyledContainer>
            <StyledPosterContainer>
                <Poster
                    src={posterPath}
                    width={400}
                />
            </StyledPosterContainer>
            <StyledDetailsContainer>
                <h1>
                    {original_title}
                </h1>
                <div>
                    {overview}
                </div>
                <div>
                    {releaseDate}
                </div>
                <div>
                    {status}
                </div>
            </StyledDetailsContainer>
        </StyledContainer>
    )
};
