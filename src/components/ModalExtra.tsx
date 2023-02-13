import { useState } from "react";
import styled from 'styled-components';

const ModalExtra = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [isMouseOn, setIsMouseOn] = useState<boolean>(false);

    return (
        <div>
            <StModalExtraButton onClick = {() => setOpen(true)}>open modal</StModalExtraButton>
                {
                    open === true
                    ? <StModalContainer onClick = {() => !isMouseOn ? setOpen(false) : null}>
                        <StModalContent onMouseOver = {() => setIsMouseOn(true)} onMouseOut = {() => setIsMouseOn(false)}>
                            <StContentsContainer>
                                닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.
                            </StContentsContainer>
                            <StButtonContainer>
                                <StCloseButton onClick = {() => {setOpen(false); setIsMouseOn(false);}}>Close</StCloseButton>
                            </StButtonContainer>
                        </StModalContent>
                    </StModalContainer>
                    : null
                }
        </div>
    );
};

export default ModalExtra;

const StModalExtraButton = styled.button`
    width : 100%;
    border : none;
    height : 2rem;
    border-radius : 0.25rem;
    background-color : rgb(255, 191, 0);
    color : black;
    font-size : 1rem;
    font-weight : 700;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    transition : 200ms;
    &:hover {
        background-color : rgb(255, 215, 94);
    }
`

const StModalContainer = styled.div`
    display : flex;
    position : fixed;
    z-index : 1;
    left : 0;
    top : 0;
    width : 100%;
    height : 100%;
    overflow : auto;
    background-color : rgba(0, 0, 0, 0.25);
`

const StModalContent = styled.div`
    width : 512px;
    height : 256px;
    background-color : white;
    margin : auto;
    padding : 2rem;
    border-radius : 0.5rem;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
`

const StContentsContainer = styled.div`
    display : flex;
`

const StButtonContainer = styled.div`
    display : flex;
    justify-content: space-between;
`

const StCloseButton = styled.button`
    width : 100%;
    border : none;
    height : 2rem;
    border-radius : 0.25rem;
    background-color : rgb(255, 59, 48);
    color : white;
    font-size : 1rem;
    font-weight : 700;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    transition : 200ms;
    &:hover {
        background-color : rgb(255, 133, 126);
    }
`