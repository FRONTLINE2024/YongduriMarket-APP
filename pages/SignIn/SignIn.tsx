import styled from "styled-components";

import {MainButton} from "@/components/Button";
import {SignInInput} from "@/components/TextInput";

function SignIn(){

    return(
        <BackgroundContainer>
            <IconImage src='/images/yongduMarketIcon.png'/>
            <SignInInput signInText = "학번"/>
            <SignInInput signInText ="비밀번호"/>
            <MainButton authText="로그인"/>
            <SignInText> 회원가입 / 비밀번호 재설정</SignInText>
        </BackgroundContainer>

    );
}
const BackgroundContainer = styled.div`
    background-color: #C5ECF8;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const IconImage = styled.img`
    height: 30%;
`;
const SignInText = styled.div`
    margin-top: 20px;
    font-size: 20px;
    color: #2891F1;
`;

export default SignIn;