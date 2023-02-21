import styled from "styled-components";

export const ContainerCartTotal = styled.div`
position: absolute;
    bottom: 0px;
    left: 0px;
    border: none;
    border-top: 2px solid #E0E0E0;
    display: flex;
    flex-direction: column;
    width: 325px;
    align-items: center;
    

    .totalValueAndText {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 10px;
    box-sizing: border-box;
}

.textTotal {
    font-size: 16px;
}

.totalValueText {
    color: #828282;
}

.buttonRemoveAllCart {
    width: 100%;
}

.buttonRemoveAll {
    width: 100%;
    height: 60px;
    background-color: #E0E0E0;
    color: #828282;
    border: none;
    border-radius: 8px;
    font-size: 18px;
}

.buttonRemoveAll:hover{
    cursor: pointer;
}
`