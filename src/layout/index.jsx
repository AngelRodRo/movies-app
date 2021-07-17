import React from 'react';
import { Navbar } from '../components/Navbar';

export default function Index({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};



