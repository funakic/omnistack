import React from 'react';

export default function Header({ children }) { // children ou props/props.title
    return(
        <header>
            <h1>{children}</h1>
        </header>
    );
}