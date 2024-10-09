import styled from "styled-components";
import {MainButton} from "@/components/Button";

import SignUpInput from "@/components/TextInput/SignUpInput";


function SignUp() {
    return (
        <BackgroundContainer>
            <IconImage src='/images/yongduMarketIcon.png'/>
            <SignUpInput studentId="학번"
                         code="인증번호"
                         pwd="비밀번호"
                         confirmPwd="비밀번호 재입력"
                         name="이름"
                         birthday="생년월일"
                         phone="전화번호"
                         nickname="닉네임"/>
            <MainButton authText="로그인"/>
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

export default SignUp;