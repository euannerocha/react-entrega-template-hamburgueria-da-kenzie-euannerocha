import styled from "styled-components";

export const ContainerHeader = styled.div`
    height: 80px;
    background-color: #F5F5F5;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    padding-inline: 150px;
    box-sizing: border-box;
    align-items: center;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');


body {
    margin: 0px;
    font-family: 'Inter', sans-serif;
}

.imgLogoHeader {
    width: 150px;
    height: 22px;
}

.inputButton {
    display: flex;
    align-items: center;
    position: relative;
}

.inputSearch {
    width: 180px;
    height: 50px;
    padding-inline-start: 15px;
    padding-inline-end: 130px;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    color: #E0E0E0;
}

.buttonSearch {
    height: 40px;
    position: absolute;
    background-color: #27AE60;
    border: none;
    border-radius: 8px;
    color: white;
    right: 10px;
    z-index: 2;
    width: 90px;
}

.inputSearch::placeholder {
    color: #E0E0E0;
}
`