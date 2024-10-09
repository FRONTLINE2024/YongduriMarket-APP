import styled from "styled-components";
import {MainButton} from "@/components/Button";
import ChangePwdInput from "@/components/TextInput/ChangePwdInput";




function ChangePwd() {
    return(
        <BackgroundContainer>
            <IconImage src='/images/yongduMarketIcon.png'/>
            <ChangePwdInput
                studentId="학번"
                code="인증번호"
                newPwd="새 비밀번호"
                confirmNewPwd="새 비밀번호 재입력"
            />
            <MainButton authText="확인"/>
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

export default ChangePwd;