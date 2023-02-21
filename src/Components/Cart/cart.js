import styled from "styled-components";

export const StyledCart = styled.div`
    position: relative; 
    display: flex;
    flex-direction: row;
    width: 325px;
    min-height: 700px;
    background-color: #F5F5F5;
    color: #333333;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-right: 65px;
    margin-left: 10px;
    overflow-x: hidden;

    .cartHeader{
        display: flex;
        position: absolute;
        top: 0px;
        height: 60px;
        width: 100%;
        background-color: #27AE60;
        color: white;
        padding-inline-start: 15px;
        box-sizing: border-box;
        border-radius: 8px 8px 0px 0px;
        align-items: center;
    }

    .cartTitle{
        font-size: 16px;
        font-weight: bold;
    }

    .cartBody{
        position:absolute;
        top: 70px;
    }
`