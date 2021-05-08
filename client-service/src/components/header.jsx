import React from 'react';
import { HeaderStyle, H1, P } from './styles';

export const Header = () => (
    <HeaderStyle>
        <H1>
            HN Feed
        </H1>
        <P> We {'<'}3 hacker news !</P>  
    </HeaderStyle>
)