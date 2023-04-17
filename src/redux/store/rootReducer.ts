import { combineReducers } from '@reduxjs/toolkit';

import { authLoginReducer } from '@slices/auth/login'
import { authRegisterReducer } from '@slices/auth/register'

const rootReducer = combineReducers({
     // auth
     authRegister : authRegisterReducer,
     authLogin : authLoginReducer,
})
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer