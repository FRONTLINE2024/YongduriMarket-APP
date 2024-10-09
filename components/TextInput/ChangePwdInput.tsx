import styled from "styled-components";
import AuthButton from "../Button/AuthButton";
import VisibilityIcon from "@mui/icons-material/Visibility";


type ChangePwdInputProps={
    studentId: string,
    code:   string,
    newPwd: string,
    confirmNewPwd: string,

}

function ChangePwdInput( {studentId, code,newPwd, confirmNewPwd}: ChangePwdInputProps){
    return(
        <>
            <StudentIdCodeInputContainer>
                <AuthContainer><StudentIdCodeInputText>{studentId} </StudentIdCodeInputText><AuthButton authText="전송"/> </AuthContainer>
                <Line/>
                <AuthContainer><StudentIdCodeInputText>{code} </StudentIdCodeInputText><AuthButton authText="인증 확인"/> </AuthContainer>
            </StudentIdCodeInputContainer>
            <StudentIdCodeInputContainer>
                <AuthContainer><StudentIdCodeInputText>{newPwd} </StudentIdCodeInputText> <VisibilityIcon/> </AuthContainer>
                <Line/>
                <AuthContainer><StudentIdCodeInputText>{confirmNewPwd} </StudentIdCodeInputText> <VisibilityIcon/> </AuthContainer>
            </StudentIdCodeInputContainer>
        </>

    );
}
const StudentIdCodeInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 13%;
    border-radius: 20px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    margin-bottom: 40px;
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

const StudentIdCodeInputText = styled.div`
    font-size: 24px;
`;


export default ChangePwdInput;
