import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { apikey, http } from "@services/http";
import {EAuthStatus, TRegisterPayload } from "@type/auth.types";
import { EToastType, toastify } from "@utils/toast";

export const authRegister = createAsyncThunk('auth/register' , async(payload : TRegisterPayload) => {
     const data = await http.post('/auth/signup', payload , {headers : {apikey}})
     .then(res => res.data)
     .catch(error => {
          const message = error?.response?.data?.errors ?? "متاسفانه ثبت نام شما با خطا مواجه شده است."
          toastify({type : EToastType.ERROR , message})
          throw {message}
     })
     toastify({type : EToastType.SUCCESS , message: "ثبت نام شما با موفقیت انجام شد."})
     return data
}) 


const registerSlice = createSlice({
     name : "auth_register",
     initialState : {
          data : {},
          loading : false,
          error : '',
          status : EAuthStatus.DEFAULT
     },
     reducers : {
          changeRegisterStatus : (state , action) => {
               state.status = action.payload
          }
     },
     extraReducers : ({addCase}) => {
          addCase(authRegister.pending , (state , action) => {
               state.data = {},
               state.loading = true,
               state.error = ''
               state.status = EAuthStatus.PENDING
          })
          addCase(authRegister.fulfilled , (state , action) => {
               state.data = action.payload === undefined ? {} : action.payload,
               state.loading = false,
               state.error = '',
               state.status = EAuthStatus.SUCCESS
          })
          addCase(authRegister.rejected , (state , action) => {
               state.data = {},
               state.loading = false,
               state.error = action?.error?.message ?? "متاسفانه ثبت نام شما با خطا مواجه شده است"
               state.status = EAuthStatus.FAILURE
          })
     }
})

export const authRegisterReducer =  registerSlice.reducer
export const {changeRegisterStatus} = registerSlice.actions 