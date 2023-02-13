import { useState } from "react";
import styled from "styled-components";

const Input = () => {

    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    const onChangePrice = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value : string = e.target.value;
        const removedCommaValue : number = Number(value.replaceAll(",", ""));
        if (removedCommaValue.toLocaleString() === 'NaN') return;
        setPrice(removedCommaValue.toLocaleString());
    };

    const onClickAlert = () => {
        alert(`{ name : ${name}, price : ${price} }`);
    };

    const onKeyDownEnter = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickAlert();
        };
    };

    return (
        <div>
            <StLabel>이름 : </StLabel>
            <StInput type = 'text' value = {name} onChange = {(e) => {setName(e.target.value)}} placeholder = 'Name'/>
            <StLabel>가격 : </StLabel>
            <StInput type = 'text' value = {price} onChange = {(e) => onChangePrice(e)} onKeyDown = {onKeyDownEnter} placeholder = 'Price'/>
            <StButton onClick = {() => {onClickAlert()}}>Save</StButton>
        </div>
    );
};

export default Input;

const StLabel = styled.label`
    font-size : 1rem;
    font-weight : 700;
    margin-right : 0.25rem;
`

const StInput = styled.input`
    height : 2rem;
    width : 256px;
    margin-right : 1rem;
    border : none;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    background-color : white;
    border-radius : 0.25rem;
    padding-left : 1rem;
    &:focus {
        outline : none;
        outline: 2px solid rgb(52, 199, 89);
        outline-offset: -2px;
    }
    &::placeholder {
        font-weight : 400;
        color : rgb(180, 180, 180);
    }

`

const StButton = styled.button`
    width : 128px;
    border : none;
    height : 2rem;
    border-radius : 0.25rem;
    background-color : rgb(52, 199, 89);
    color : white;
    font-size : 1rem;
    font-weight : 700;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    transition : 200ms;
    &:hover {
        background-color : rgb(120, 210, 143);
    }
`