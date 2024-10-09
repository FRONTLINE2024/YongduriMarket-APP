import styled from "styled-components";

type SignInInputProps = {
    signInText: string;
};

function SignInInput({ signInText }: SignInInputProps) {
    return (
        <SignInInputContainer>
            <SignInInputText>
                {signInText}
            </SignInInputText>
        </SignInInputContainer>
    );
}

const SignInInputContainer = styled.div`
    padding-left: 20px;
    width: 80%;
    height: 46px;
    border-radius: 50px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 40px;
`;

const SignInInputText = styled.div`
    display: flex;
    font-size: 24px;
    font-weight: normal;
`;

export default SignInInput;
