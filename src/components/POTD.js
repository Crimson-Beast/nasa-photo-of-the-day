import React from 'react';
import styled from 'styled-components'


// https://api.nasa.gov/planetary/apod?api_key=AYSM7ygxSLhy48NGF2iERp2FNrd9148SYctebpgr

function POTD(props) {
    return(
        <Container>
            <H1Styled>{props.data.title}</H1Styled>
            <H2styled>{props.data.date}</H2styled>
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
    color: teal;
    text-decoration: underline;
`

const H2styled = styled.h2`
    fontsize: 20px;
    text-decoration: wavy underline overline;
    padding: 20px;
    

`

const Imgstyled = styled.img`
    margin: 0 10px ;
    padding: 30px;
    border-style: double;
    background-color: lightgrey;
    width: 80%;
`

const AStyled = styled.a`
    font-size: 20px;
    text-decoration: none;
    color: red;
`
const PStyled = styled.p`
    border-style:  solid none none none;
    font-size: 25px;
`

export default POTD