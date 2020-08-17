export interface Iroute {
    path: string,
    component?: any,
    children?: Iroute[],
    to?: string
}

export interface IuserInfo {
    signTime: number,
    user_id: string,
    user_name: string,
    identity_id: string,
    identity_text: string,
    iat: number,
    avatar: string
}

