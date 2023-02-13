import styled from "styled-components";
import { MdArrowForwardIos, MdAssignmentLate } from "react-icons/md";

const Button = () => {
    return (
        <StContainer>
            <div>
                <StLargeButtonRed onClick = {() => {alert('버튼을 만들어보세요');}}>Large Primary Button<MdArrowForwardIos/></StLargeButtonRed>
                <StMediumButtonRed>Medium</StMediumButtonRed>
                <StSmallButtonRed>Small</StSmallButtonRed>
            </div>
            <div>
                <StLargeButtonGreen onClick = {() => {prompt('어렵나요?');}}>Large Primary Button<MdAssignmentLate/></StLargeButtonGreen>
                <StMediumButtonGreen>Medium</StMediumButtonGreen>
                <StSmallButtonGreen>Small</StSmallButtonGreen>
            </div>
        </StContainer>
    );
};

export default Button;

const StContainer = styled.div`
    display : flex;
    flex-direction : column;
    gap : 1rem;
`

const StLargeButtonRed = styled.button`
    width : 256px;
    border : none;
    height : 3rem;
    border-radius : 0.25rem;
    background-color : rgb(255, 59, 48);
    color : white;
    font-size : 1rem;
    font-weight : 700;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    transition : 200ms;
    margin-right : 1.5rem;
    &:hover {
        background-color : rgb(255, 133, 126);
    }
    &:active {
        background-color : gray;
    }
`

const StMediumButtonRed = styled.button`
    width : 128px;
    border : none;
    height : 3rem;
    border-radius : 0.25rem;
    background-color : rgb(255, 59, 48);
    color : white;
    font-size : 1rem;
    font-weight : 700;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    transition : 200ms;
    margin-right : 1.5rem;
    &:hover {
        background-color : rgb(255, 133, 126);
    }
    &:active {
        background-color : gray;
    }
`

const StSmallButtonRed = styled.button`
    width : 128px;
    border : none;
    height : 2rem;
    border-radius : 0.25rem;
    background-color : rgb(255, 59, 48);
    color : white;
    font-size : 1rem;
    font-weight : 700;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    transition : 200ms;
    margin-right : 1.5rem;
    &:hover {
        background-color : rgb(255, 133, 126);
    }
    &:active {
        background-color : gray;
    }
`

const StLargeButtonGreen = styled.button`
    width : 256px;
    border : none;
    height : 3rem;
    border-radius : 0.25rem;
    background-color : rgb(52, 199, 89);
    color : white;
    font-size : 1rem;
    font-weight : 700;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    transition : 200ms;
    margin-right : 1.5rem;
    &:hover {
        background-color : rgb(120, 210, 143);
    }
    &:active {
        background-color : gray;
    }
`

const StMediumButtonGreen = styled.button`
    width : 128px;
    border : none;
    height : 3rem;
    border-radius : 0.25rem;
    background-color : rgb(52, 199, 89);
    color : white;
    font-size : 1rem;
    font-weight : 700;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    transition : 200ms;
    margin-right : 1.5rem;
    &:hover {
        background-color : rgb(120, 210, 143);
    }
    &:active {
        background-color : gray;
    }
`

const StSmallButtonGreen = styled.button`
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
    margin-right : 1.5rem;
    &:hover {
        background-color : rgb(120, 210, 143);
    }
    &:active {
        background-color : gray;
    }
`