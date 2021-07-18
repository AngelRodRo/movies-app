import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { useHistory } from 'react-router';

import { SearchInput } from 'components/SearchInput';

const MainSection = Styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 250px);


    padding-top: 250px;

    justify-items: center;
    align-items: center;

    flex-direction: column;

    background: url('images/main-background.jpeg');
`;

const Home = () => {
    const history = useHistory();
    const [query, setQuery] = useState('');

    const ENTER_KEY = 13;

    useEffect(() => {
        document.title = "Search for your favorite movies!"
    }, []);

    const search = async () => {
        history.push(`/search${query? `?q=${query}` : ''}`);
    };

    const startSearch = (event) => {
        if (event.keyCode === ENTER_KEY) {
            search();
        }
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <MainSection>
            <SearchInput
                placeholder="Search for a movie ..."
                onKeyUp={startSearch}
                value={query}
                onChange={handleChange}
            />
        </MainSection>
    );
};

export default Home;
