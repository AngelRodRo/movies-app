import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

import { useHistory, useLocation } from 'react-router-dom';

import { SearchInput } from 'components/SearchInput';
import { Poster } from 'components/Poster';

import {
    BG_COLOR,
} from 'constants/colors';

import {
    discoverMovies,
    searchMovies,
} from 'api';

function useQuery() {
    return new URLSearchParams(useLocation().search);
};

const StyledList = Styled.div`
    display: flex;
    flex-flow: wrap;

    justify-content: center;
`;

const StyledPoster = Styled(Poster)`
    margin: 10px;
`;

const StyledContainer = Styled.div`
    background: ${BG_COLOR};
`;

const StyledSearchContainer = Styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;
`;

export default function Search() {
    const query = useQuery();
    const history = useHistory();

    const [results, setResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState(query.get('q') || '');

    useEffect(() => {
        const doDiscoverMovies = async () => {
            try {
                const response = await discoverMovies();
                setResults(response.results);
            } catch (error) {

            }
        };

        const doSearch = async () => {
            try {
                const response = await searchMovies(searchQuery);
                setResults(response.results);
            } catch (error) {

            }
        }

        if (searchQuery === '') {
            doDiscoverMovies();
        } else {
            doSearch();
        }
    }, [searchQuery]);

    const moviesListView = results.map(result =>
        <StyledPoster
            key={result.id}
            src={result.poster_path}
            isClickable={true}
            onClick={() => goToMovie(result.id)}
        />
    );

    const goToMovie = id => {
        history.push(`/movies/${id}`);
    };

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <StyledContainer>
            <StyledSearchContainer>
                <SearchInput
                    placeholder="Search for a movie ..."
                    value={searchQuery}
                    onChange={handleChange}
                />
            </StyledSearchContainer>
            <StyledList>
                {
                    moviesListView
                }
            </StyledList>
        </StyledContainer>
    );
};
