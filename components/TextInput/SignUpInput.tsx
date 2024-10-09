
import styled from "styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AuthButton from "../Button/AuthButton";

type SignUpInputProps = {
    studentId: string; //학번
    code: string; //인증번호
    pwd: string; //비밀번호
    confirmPwd: string;// 비밀번호 재입력
    name: string;//이름
    phone: string;// 전화번호
    birthday: string;//생년월일
    nickname: string;// 닉네임
}

function SignUpInput({studentId,code,pwd, confirmPwd, name, phone, birthday, nickname}: SignUpInputProps) {
    return(
        <>
            <SignUpInputContainer>
                <AuthContainer><AccountInputText>{studentId }</AccountInputText> <AuthButton authText="전송"/></AuthContainer>
                <Line/>
                <AuthContainer><AccountInputText>{code}</AccountInputText>  <AuthButton authText="인증 확인"/></AuthContainer>
                <Line/>
                <AuthContainer><AccountInputText>{pwd}</AccountInputText>  <VisibilityIcon/></AuthContainer>
                <Line/>
                <AuthContainer><AccountInputText >{confirmPwd}</AccountInputText> <VisibilityIcon/></AuthContainer>
            </SignUpInputContainer>
            <SignUpInputContainer>
                <AuthContainer><AccountInputText>{name }</AccountInputText></AuthContainer>
                <Line/>
                <AuthContainer><AccountInputText>{birthday}</AccountInputText> </AuthContainer>
                <Line/>
                <AuthContainer><AccountInputText>{phone}</AccountInputText> </AuthContainer>
                <Line/>
                <AuthContainer><AccountInputText >{nickname}</AccountInputText> </AuthContainer>
            </SignUpInputContainer>
        </>

    );
}

const SignUpInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 25%;
    border-radius: 20px;
    background-color: #FFFFFF;
    margin-bottom: 40px;
    border: 1px solid #D5D5D5;
`;
const AuthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
`;
const Line = styled.div`
    border-bottom: 1px solid #D5D5D5;
    margin: 10px 0;
`;
const AccountInputText = styled.div<{ isLast?: boolean }>`
    font-size: 24px;
`;

export default  SignUpInput;