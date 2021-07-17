import React from 'react';
import Styled from 'styled-components';

import { SearchInput } from '../components/SearchInput';

const MainSection = Styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    justify-items: center;
    align-items: center;

    flex-direction: column;

    background: url('images/main-background.jpeg');
`;

const Home = () => {
    return (
        <MainSection>
            <SearchInput />
        </MainSection>
    );
};

export default Home;
