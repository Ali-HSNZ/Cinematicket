import Cookies from "universal-cookie";

type TCookie = {
     key : string,
     value : string,
     config : object 
}

export const setCookie : React.FC<TCookie> = ({key , value , config}) : any => new Cookies().set(key , value, config)
export const userToken =  `Bearer ${new Cookies().get("userToken")}`