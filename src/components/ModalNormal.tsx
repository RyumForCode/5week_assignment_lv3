import { useState } from "react";
import styled from 'styled-components';

const ModalNormal = () => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <StModalNormalButton onClick = {() => setOpen(true)}>open modal</StModalNormalButton>
                {
                    open === true
                    ? <StModalContainer>
                        <StModalContent>
                            <StContentsContainer>
                                닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
                            </StContentsContainer>
                            <StButtonContainer>
                                <StCloseButton onClick = {() => setOpen(false)}>Close</StCloseButton>
                                <StConfirmButton>Confirm</StConfirmButton>
                            </StButtonContainer>
                        </StModalContent>
                    </StModalContainer>
                    : null
                }
        </div>
    );
};

export default ModalNormal;

const StModalNormalButton = styled.button`
    width : 100%;
    border : none;
    height : 2rem;
    border-radius : 0.25rem;
    background-color : rgb(255, 0, 124);
    color : white;
    font-size : 1rem;
    font-weight : 700;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    transition : 200ms;
    &:hover {
        background-color : rgb(255, 138, 195);
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
    width : 49%;
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

const StConfirmButton = styled.button`
    width : 49%;
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