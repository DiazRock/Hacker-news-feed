import styled from 'styled-components';

export const HeaderStyle = styled.header`
    background-color: #000d33;
    height: 30vh;
`

export const H1 = styled.h1`
    color: white;
    font-size: 5.5rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 1%;
    
`

export const P = styled.p`
    color: white;
    font-size: 2.0rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 1%;
`

export const PostRow = styled.article`
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ffffff;
    border: 1px #cccccc;
    display: table;
    width: 100%;
    table-layout: fixed;
    border-spacing: 10px;
`

export const RowText = styled.div`
    font-color: #333333;
    font-size: 1.6rem;
    display: table-cell;
    padding: 1%;
    @media(max-width: 800px){
        font-size: 1rem;
    }
    
`

export const AuthorText = styled.p`
    color: #767A6E;
    margin-left: 5%;
    display: inline;
`

export const DateText = styled.p`
    display: inline;
    margin-left: 70%;
    @media(max-width: 425px){
        margin-left: 40%;
    }
`

