import styled from "styled-components";

type MainProps = {
    authText: string;
}

function MainButton({authText} : MainProps) {
    return(
        <MainButtonContainer>
            <MainButtonText> {authText}</MainButtonText>
        </MainButtonContainer>
    );
}
const MainButtonContainer = styled.div`
    width: 60%;
    height: 5%;
    background-color: #87C2D5;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MainButtonText = styled.div`
    font-size: 20px;
    font-weight: bold;
`;
export default MainButton;