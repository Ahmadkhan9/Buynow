import styled from "styled-components";
export const GridContainer = styled.div`
display : grid;
grid-template-columns :150px auto;
column-gap: 5px;
margin  :10px;
padding : 0px;
`
export const GridColumn1 = styled.div`
background-color : rgb(31, 33, 39);
border-radius : 10px;
`

export const GridColumn2 = styled.div`
background-color : rgb(31, 33, 39);
border-radius : 10px;

`

export const Button = styled.p`
box-sizing : border-box;
padding : 20px 0px;
margin-bottom : 10px;
text-align : center;
color : rgb(128, 129, 145);
font-family : Arial;
font-size : 18px;

&:hover {
    color:white;
    background-color : #5B15CA;
    border-radius : 10px;
}
`