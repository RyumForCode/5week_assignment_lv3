import styled from "styled-components";

const Select = () => {
    return (
        <StDiv>
            <select>
                <option>리액트</option>
                <option>자바</option>
                <option>스프링</option>
                <option>리액트네이티브</option>
            </select>
            <select>
                <option>리액트</option>
                <option>자바</option>
                <option>스프링</option>
                <option>리액트네이티브</option>
            </select>
        </StDiv>
    );
};

export default Select;

const StDiv = styled.div`
    border-radius : 0.5rem;
    border : 1px solid black;
    width : 100%;
    height : 128px;
`