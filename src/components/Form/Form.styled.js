import styled from "styled-components";

export const FormBox = styled.form`
    text-align: center;
`

export const LabelBox = styled.label`
    font-size: 20px;
    color: brown;
    font-weight: bold;
    font-style: italic;
    text-shadow: 1px 1px 1px red, 2px 2px 1px red;
`

export const MainInput = styled.input`
    width: 400px;
    border-radius: 25px;
    border: 1px solid darkgreen;
    height: 35px;
    margin-bottom: 10px;
    margin-top: 10px;
    outline-color: aqua;
    padding-left: 15px;
    color: darkgreen;
`

export const AddBTN = styled.button`
    padding: 12px 30px;
    border-radius: 25px;
    border: 1px solid darkgreen;
    color: darkgreen;
    background-color: #d7d1d1;

    :hover {
        border: 1px solid #d7d1d1;
        color: #d7d1d1;
        background-color: darkgreen;
    }
`