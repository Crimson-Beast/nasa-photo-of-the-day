import React from 'react';
import styled from 'styled-components'
// https://api.nasa.gov/planetary/apod?api_key=AYSM7ygxSLhy48NGF2iERp2FNrd9148SYctebpgr

function POTD(props) {
    return(
        <Container>
            <H1Styled>{props.data.title}</H1Styled>
            <H2styled>{props.data.data}</H2styled>
            <Imgstyled src ={props.data.url} alt={props.data.title}></Imgstyled>
            <div>
                <AStyled href={props.data.url} alt="media">Click here for the video</AStyled>
            </div>
            <div>
                <PStyled>{props.data.explanation}</PStyled>
            </div>
        </Container>
    )
};

const Container = styled.div`
    text-align: center;
    background-color: white;
    box-shadow: 010px 20px 0;
    `

const H1Styled = styled.h1`
    color: navy;
    undrline: 1px;
`

const H2styled = styled.h2`
    fontsize: 20px;
`

const Imgstyled = styled.img`
    width: 90%;
`

const AStyled = styled.a`
    font-size: 20px;
    text-decoration: none;
    color: brown
`
const PStyled = styled.p`
    font-size: 25px;
`

export default POTD