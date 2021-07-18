import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { SearchInput } from 'components/SearchInput';
import {
    StyledList,
    StyledPoster,
    StyledRating,
    StyledContainer,
    StyledSearchContainer,
} from './styles';

import {
    discoverMovies,
    searchMovies,
} from 'api';

function useQuery() {
    return new URLSearchParams(useLocation().search);
};

export default function Search() {
    const query = useQuery();
    const history = useHistory();

    const [stars, setStars] = useState(0);
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState(query.get('q') || '');

    useEffect(() => {
        const doDiscoverMovies = async () => {
            try {
                const response = await discoverMovies();
                setResults(response.results);
                setFilteredResults(response.results);
            } catch (error) {

            }
        };

        const doSearch = async () => {
            try {
                const response = await searchMovies(searchQuery);
                setResults(response.results);
                setFilteredResults(response.results);
            } catch (error) {

            }
        }

        if (searchQuery === '') {
            doDiscoverMovies();
        } else {
            doSearch();
        }
    }, [searchQuery]);

    useEffect(() => {
        const newResults = filteredResults.filter(result => (stars * 2) - 2 <= result.vote_average && result.vote_average <= (stars * 2));
        setResults(newResults);
    }, [stars]); // eslint-disable-line

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

    const handleRated = (newStars) => {
        setStars(newStars);
    };

    return (
        <StyledContainer>
            <StyledSearchContainer>
                <SearchInput
                    placeholder="Search for a movie ..."
                    value={searchQuery}
                    onChange={handleChange}
                />
                <StyledRating
                    stars={stars}
                    onRated={handleRated}
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
