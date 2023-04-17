import Loading from "@common/loading";
import { authLogin , changeLoginStatus } from "@slices/auth/login";
import { TAppDispatch, TRootState } from "@store/store";
import { EAuthStatus, TLoginPayload } from "@type/auth.types";
import { VALIDATION_PASSWORD, VALIDATION_PHONE_NUMBER } from "@utils/valiation";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as YUP from 'yup'


const AuthLoginPage = () => {

     const dispatch = useDispatch<TAppDispatch>()
     const router = useRouter()
     const onSubmit = (values : TLoginPayload) => {
          dispatch(authLogin(values))
     }

     const {loading , status} = useSelector((state : TRootState) => {return state.authLogin})

     const validationSchema : object = YUP.object({
          tel : YUP.string()
               .required("شماره موبایل الزامی می‌باشد.")
               .matches(VALIDATION_PHONE_NUMBER,"شماره موبایل معتبر نیست."),
          password : YUP.string()
               .required("رمز عبور الزامی می‌باشد.")
               .matches(VALIDATION_PASSWORD , "رمز عبور معتبر نیست | رمز عبور میتواند ترکیبی از عدد و حروف انگلیسی باشد."),
     })

     const formik = useFormik({
          initialValues : {
               tel : "",
               password : "",
          },
          onSubmit,
          validateOnMount : true,
          validationSchema
     })
     
     useEffect(() => {
          if(status === EAuthStatus.SUCCESS){
               setTimeout(() => {
                    router.push('/')
               }, 1000);
               dispatch(changeLoginStatus(EAuthStatus.DEFAULT))
          }
     } , [status])

     return (  
          <main className="w-full flex justify-center items-center h-auto">
               <Head>
                    <title>ورود | سینماتیکت</title>
               </Head>
               <section className="w-full max-w-[450px] mt-16 px-6">
                    <div className="w-full flex justify-center">
                         <img className="w-[130px] h-auto object-cover" src="https://cinematicket.org/v3.15.0/assets/images/typo_logo.svg" alt=""/>
                    </div>
                    <Link href={`/`} className="mt-4 w-fit font-iranyekan-regular  flex items-center rounded-md border hover:border-gray-400 text-second px-4 text-sm py-2 gap-x-1.5 bg-white">
                         <svg  className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                         </svg>
                         بازگشت    
                    </Link>
                    <section className="w-full bg-white p-6 mt-4 rounded-lg">
                         <h5 className="font-iranyekan-bold text-main text-2xl text-center w-full">ورود</h5>
                         <hr className="mt-4 border-gray-300"/>
                         <form onSubmit={formik.handleSubmit} className="flex flex-col justify-between items-end gap-x-6 mt-6">
                              <div className="w-full flex flex-col  gap-6">
                                   <div className="w-full relative">
                                        <p className="font-iranyekan-regular text-gray-500 text-sm">شماره همراه</p>
                                        <svg className="w-5 h-5 absolute top-10 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                        <input maxLength={11} type="tel" name="tel" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`${formik.errors.tel && formik.touched.tel ? "bg-red-50 border-red-200 focus:border-red-300 hover:border-red-300" : "bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300"} mt-2  placeholder:text-gray-500 text-gray-600  py-3 pl-2 pr-9 rounded-md font-iranyekan-regular text-sm border   focus:outline-none w-full`} />
                                        {formik.errors.tel && formik.touched.tel && <p className="font-iranyekan-regular text-xs mt-2 text-red-600">{formik.errors.tel}</p>}
                                   </div>
                                   <div className="w-full relative">
                                        <p className="font-iranyekan-regular text-gray-500 text-sm">رمز ورود</p>
                                        <svg className="w-5 h-5 absolute top-10 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                        </svg>
                                        <input maxLength={24} type="tel" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`${formik.errors.password && formik.touched.password ? "bg-red-50 border-red-200 focus:border-red-300 hover:border-red-300" : "bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300"} mt-2  placeholder:text-gray-500 text-gray-600  py-3 pl-2 pr-9 rounded-md font-iranyekan-regular text-sm border   focus:outline-none w-full`} />
                                        {formik.errors.password && formik.touched.password && <p className="font-iranyekan-regular text-xs mt-2 text-red-600">{formik.errors.password}</p>}
                                   </div>
                              </div>
                              <Link href={'/auth/register?returnUrl=/auth/login'} className="font-iranyekan-regular text-sm text-red-600 text-right w-full underline underline-offset-2 mt-4">حساب کاربری ندارید؟</Link>
                              <div className="w-full h-auto mt-4  flex items-center justify-end gap-x-4">
                                   <button disabled={!formik.isValid || loading} type="submit" className="group flex justify-center w-[110px] disabled:bg-gray-600  disabled:cursor-not-allowed disabled:text-gray-200  bg-red-500 hover:bg-red-600 duration-150 rounded-md   py-3 h-fit">
                                        {loading ? (
                                             <Loading color="white" scale={20} type={"bars"} />
                                        ) : (
                                             <p className="group-disabled:text-gray-100 text-sm font-iranyekan-bold text-red-100">ورود</p>
                                        )}
                                   </button>
                              </div>
                         </form>
                    </section>
               </section>
          </main>
     );
}

 
export default AuthLoginPage;
