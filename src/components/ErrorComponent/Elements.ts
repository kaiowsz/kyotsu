import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #010606;
`

export const ErrorH1 = styled.h1`
    color: #FFF;
    text-align: center;
    margin: 30px;
`

export const Back = styled(Link)`
    color: #FFF;
    transition: all .5s;

    &:hover {
        color: #01BF71;
    }
`