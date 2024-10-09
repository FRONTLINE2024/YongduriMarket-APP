export type SignInRequest = {
    studentId: number;
    pwd: string;
}
export type SignOutRequest = {
    studentId: number;
    code: number;
    pwd: string;
    confirmPwd: string;
    name: string;
    phone: string;
    birthday: string;
    nickname: string
}

export type ChangePwdRequest = {
    studentId: number;
    code: number;
    NewPwd: string;
    confirmNewPwd: string;
}

