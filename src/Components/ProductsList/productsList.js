import styled from "styled-components";

export const ProductsListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 890px;
    justify-content: space-between;
    align-items: center;
    gap: 20px; 

    body{
    margin-bottom: 50px;
 }

 .titleAndTypeProductsList{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    width: 100%;
 }

 .valueProductsList{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    width: 100%;
    color: #27AE60;
 }

 .buttonAddProduct{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    width: 100%;
 }

 .imageProductsListProduct{
    width: 200px;
    height: 140px;
    object-fit: contain;
 }

 .productCart{
    background-color:transparent;
    border: 2px solid #F5F5F5;
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    padding: 10px 10px 30px 15px;
 }

 .buttonAdd{
    height: 40px;
    background-color: #27AE60;
    border: none;
    border-radius: 8px;
    color: white;
    right: 10px;
    width: 90px;
 }
`