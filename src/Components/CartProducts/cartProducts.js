import styled from "styled-components";

export const CartProductsContainer = styled.div`
    display: flex;
    width: 365px;
    height: 70px;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 15px;
 
    

    .imgCartProduct{ 
        width: 70px;
        height: 70px;
    }

.titleAndType{
    display: flex;
    flex-direction: column;
    height: 50px;
    justify-content: flex-start;
    max-width: 75px;
    margin-left: -30px;
    justify-content: center;
}

.categoryCartProduct{
    font-size: 12px;
}

.nameCartProduct{
    font-size: 14px;
}

.buttonRemoveCartProduct{
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
    height: 100%;
}
.buttonRemove{
    background-color: transparent;
    border: none;
    color: #BDBDBD;
}
`

