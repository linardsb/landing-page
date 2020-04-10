import React from 'react'
import styled from 'styled-components'
import Wawe from './Globals/Wawe'


const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 750px;
    background-size: cover;
    display: grid;
    grid-template-rows: 320px auto;
    grid-gap: 60px;
    position: relative;
    vertical-align: middle;

    @media(min-width: 1200px) and (max-width:5200px) {
        height: 850px;
    }
    @media(min-width: 720px) and (max-width:1200px) {
        height: 900px;
    }

    @media(min-width: 420px) and (max-width:720px) {
        height: 1000px;
    }

    @media(min-width: 320px) and (max-width:420px) {
        height: 1100px;
    }

    @media(max-width: 320px) {
        height: 1200px;
    }
`
const SectionLogo = styled.img` 
    align-self:end;
    width: 120px;
    margin: 0 auto;

    @media(min-width: 320px) and (max-width:720px) {
        width: 90px;
    }

`
const SectionTitleGroup = styled.div`
    display:flex;
    align-items: flex-start;
    justify-content: center;
    grid-template-columns: 700px auto;
    margin: 0 200px;
    grid-gap: 100px;
    grid-template-rows: 0 100%;

    @media(max-width: 1154px) {
        display: grid;
        grid-template-columns: 1fr;
        text-align: center;
    }

    @media(min-width: 590px) and (max-width: 1020px) {
        margin: 0 100px;
        grid-gap: 50px;
        grid-template-rows: 0 90%;
    }

    @media(min-width: 300px) and (max-width: 590px) {
        margin: 0 30px;
        grid-gap: 40px;
        grid-template-rows: 0 85%;
    }
`
const SectionTitle = styled.h3`
    width:100%;
    text-align: center;
    color: #f0f3f7;
    font-size: 30px;
    margin: 0;
    line-height: 1.5;
    vertical-align: center;
    padding-top: 3em;

    @media(max-width: 2800px) {
        padding-top: 2em;
    }

    @media(max-width: 1200px) {
        text-align: center;
        padding-top: 0em;
    }
    @media(max-width: 520px) {
       font-size:30px;
       text-align: center;
       line-height: 1.5;
       padding-top: 0em;
    }
`
const SectionText = styled.p`  
    color: #f0f3f7;
    line-height: 1.5;
    vertical-align:top;
    @media(max-width: 720px) {
        padding-top: 20px;
        text-align: center;
    }
    @media(max-width: 520px) {
       padding-top:20px;
    }
`
const WaweBottom = styled.div`
    position:absolute;
    width:100%;
    bottom: -10px;
`

const WaweTop = styled.div`
    position: absolute;
    width: 100%;
    top:-10px;
    transform: rotate(180deg);

`


const Section = props => (
    <SectionGroup image={props.image}>
        <WaweTop><Wawe/></WaweTop>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
        <WaweBottom><Wawe/></WaweBottom>
    </SectionGroup>
)

export default Section 