import styled from "styled-components";

export const ContactMainList = styled.ul`
    margin-top: 20px;
`

export const ContactStyledItem = styled.li`
    align-items: center;
    color: darkmagenta;
    font-size: 20px;
    font-style: italic;

    :not(:last-child) {
        margin-bottom: 10px;
    }
`

export const ContactDeleteBTN = styled.button`
    padding: 2px 20px;
    border-radius: 25px;
    border: 1px solid darkgreen;
    color: darkgreen;
    background-color: #d7d1d1;
    margin-left: 10px;

    :hover {
        border: 1px solid #d7d1d1;
        color: #d7d1d1;
        background-color: darkgreen;
    }
`