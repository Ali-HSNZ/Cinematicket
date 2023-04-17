import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { apikey, http  } from "@services/http";
import {EAuthStatus, TLoginPayload } from "@type/auth.types";
import { setCookie } from "@utils/cookie";
import { EToastType, toastify } from "@utils/toast";
import Cookies from "universal-cookie";

export const authLogin = createAsyncThunk('auth/login' , async(payload : TLoginPayload) => {
     const data = await http.post('/auth/login', payload , {headers : {apikey}})
     .then(res => res.data)
     .catch(error => {
          const message = error?.response?.data?.errors ?? "متاسفانه ورود شما با خطا مواجه شده است."
          toastify({type : EToastType.ERROR , message})
          throw {message}
     })
     toastify({type : EToastType.SUCCESS , message: "با موفقیت به حساب کاربری خود وارد شده‌اید."})
     return data
}) 

const loginSlice = createSlice({
     name : "auth_login",
     initialState : {
          data : {},
          loading : false,
          error : '',
          status : EAuthStatus.DEFAULT
     },
     reducers : {
          changeLoginStatus : (state , action) => {
               state.status = action.payload
          },
          // After Refreshed Page
          autoLogin : (state , action) => {
               
          }
     },
     extraReducers : ({addCase}) => {
          addCase(authLogin.pending , (state , action) => {
               state.data = {},
               state.loading = true,
               state.error = ''
               state.status = EAuthStatus.PENDING
          })
          addCase(authLogin.fulfilled , (state , action) => {
               state.data = action.payload === undefined ? {} : action.payload,
               state.loading = false,
               state.error = '',
               state.status = EAuthStatus.SUCCESS
               setCookie({key:"userToken" , value : action.payload.token, config : {path : '/'}})
          })
          addCase(authLogin.rejected , (state , action) => {
               state.data = {},
               state.loading = false,
               state.error = action?.error?.message ?? "متاسفانه ورود شما با خطا مواجه شده است"
               state.status = EAuthStatus.FAILURE
          })
     }
})

export const authLoginReducer =  loginSlice.reducer
export const {changeLoginStatus} = loginSlice.actions 