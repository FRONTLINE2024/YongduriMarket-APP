import styled from "styled-components";

type AuthProps = {
    authText: string;
}


function AuthButton({authText} : AuthProps) {
    return(
        <AuthButtonContainer>
            <AuthButtonText> {authText}</AuthButtonText>
        </AuthButtonContainer>
    );
}
const AuthButtonContainer = styled.div`
    background-color: #87C2D5;
    border-radius: 50px;
    height: 30px;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const AuthButtonText = styled.div`
    font-size: 14px;
    font-weight: bold;
`;
export default AuthButton;