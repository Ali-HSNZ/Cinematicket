export type TRegisterPayload = {
     tel : string
     password : string,
     repeatPass : string
}
export type TLoginPayload = {
     tel : string
     password : string,
}
export type TProfilePayload = {
     token : string
}
export enum EAuthStatus{
     "DEFAULT" = "defualt",
     "PENDING" = 'pending',
     "SUCCESS" = "success",
     "FAILURE" = "failure",
}
// never used this
type TUser = {
     id : number | string
     full_name : string | null
     tel : string | null
     email : string | null
     birthday : string | null
     credit_card_num : string | null
     national_id : string | null
     profile_pic_url : string | null
}
// never used this
export type TRegisterError = {
     name : string,
     message : Array<string>
}
// never used this
export interface IRegisterUser {
     token : string
     user : TUser
}