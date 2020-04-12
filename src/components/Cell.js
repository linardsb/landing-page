import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
    display:grid;
    /*grid-template-columns:minmax(70px, max-content);*/
    grid-gap: 5px;
    align-items: center;
    marign: 0 auto;
`

const CellImage = styled.div`
    width:60px;
    height:60px;
    background-image:url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    align:center;

    @media (max-width: 1060px) {
        text-align: center;
        margin: auto;
  }
`


const CellTitle = styled.div`
    color: #182736;
    font-size: 20px;
    padding: 0px 0 35px 0;
    vertical-align:text-top;
    justify-items: center;

    @media (max-width: 1060px) {
    text-align: center;
    width:80%;
    margin: 0 auto;
    padding-bottom:60px;
  }
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image} alt=""></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell