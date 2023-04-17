import { useRouter } from "next/router";
import { FC } from "react";
import { toast } from "react-toastify";

export enum EToastType {
     'SUCCESS' = 'success',
     "ERROR" = 'error'
}
type TToastProps = {
     type : EToastType,
     message : Array<string> | string
}


export const toastify : FC<TToastProps> = ({type , message}) : any => {
     if(typeof message === 'string'){
          toast[type](message)
          
     }else if(typeof message === 'object'){
          message.forEach((item) => {
               toast[type](item?.message)
          });
     }
}