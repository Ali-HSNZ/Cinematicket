import Layout from "@layout/Layout"
import Dashboard_Layout from "@layout/dashboard/Dashboard_Layout";
import { VALIDATION_EMAIL, VALIDATION_PHONE_NUMBER } from "@utils/valiation";
import { useFormik } from "formik";
import * as Yup from 'yup'
import DatePicker,{DateObject} from "react-multi-date-picker"
import type{Value} from "react-multi-date-picker"
import Icon from "react-multi-date-picker/components/icon"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/layouts/mobile.css"
import NumberFormat from "react-number-format";
import {useState} from 'react'

const EditProfile = () => {

     const onSubmit = () => {

     }


     const validationSchema = Yup.object({
          full_name : Yup.string()
               .min(5 , "نام و نام خانوادگی نمی تواند کم‌تر از 5 نویسه باشذ")
               .trim()
               .max(50,"نام و نام خانوادگی نمی تواند بیشتر از 50 نویسه باشد"),
          tel : Yup.string()
               .trim()
               .matches(VALIDATION_PHONE_NUMBER , "شماره موبایل معتبر نمی‌باشد."),
          email : Yup.string()
                  .matches(VALIDATION_EMAIL , "ایمیل معتبر نمی‌باشد.")
     }) 

     const formik = useFormik({
          initialValues : {
               full_name : "",
               tel : "",
               email : '',
               birthday : '',
          },
          onSubmit,
          validationSchema
     })

     return (  
          <Layout>
               <Dashboard_Layout>
                    <section className="bg-white p-6 rounded-md">
                         <h3 className="font-iranyekan-bold text-gray-500">احراز هویت</h3>
                         <p className="font-iranyekan-regular text-gray-600 text-sm mt-4">
                              درصورتی که مجموع تراکنش‌های شما از کیف پول بیشتر از ۸۰۰ هزار تومان شود، با توجه به قوانین شفافیت مالی برای ادامه استفاده از کیف پول باید اطلاعات زیر را تکمیل کنید.
                         </p>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                              <div className="w-full relative">
                                   <p className="font-iranyekan-regular text-gray-500 text-sm">نام و نام خانوادگی</p>
                                   <svg className="w-5 h-5 absolute top-11 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                   </svg>
                                   <input maxLength={50} placeholder="اصغر فرهادی" type="tel" name="full_name" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`${formik.errors.full_name && formik.touched.full_name ? "bg-red-50 border-red-200 focus:border-red-300 hover:border-red-300" : "bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300"} mt-2  placeholder:text-gray-400 text-gray-600  py-4 pl-2 pr-9 rounded-md placeholder:text-sm  font-iranyekan-regular text-sm border   focus:outline-none w-full`} />
                                   {formik.errors.full_name && formik.touched.full_name && <p className="font-iranyekan-regular text-xs mt-2 text-red-600">{formik.errors.full_name}</p>}
                              </div>
                              <div className="w-full relative">
                                   <p className="font-iranyekan-regular text-gray-500 text-sm">شماره موبایل</p>
                                   <svg className="w-5 h-5 absolute top-11 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                   </svg>
                                   <input maxLength={11} placeholder="09123456789" type="tel" name="tel" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`${formik.errors.tel && formik.touched.tel ? "bg-red-50 border-red-200 focus:border-red-300 hover:border-red-300" : "bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300"} mt-2  placeholder:text-gray-400 text-gray-600  py-4 pl-2 pr-9 rounded-md placeholder:text-sm  font-iranyekan-regular text-sm border   focus:outline-none w-full`} />
                                   {formik.errors.tel && formik.touched.tel && <p className="font-iranyekan-regular text-xs mt-2 text-red-600">{formik.errors.tel}</p>}
                              </div>
                              <div className="w-full relative">
                                   <p className="font-iranyekan-regular text-gray-500 text-sm">شماره کارت</p>
                                   <svg className="w-5 h-5 absolute top-11 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                   </svg>
                                   <input maxLength={11} placeholder="09123456789" type="tel" name="tel" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`${formik.errors.tel && formik.touched.tel ? "bg-red-50 border-red-200 focus:border-red-300 hover:border-red-300" : "bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300"} mt-2  placeholder:text-gray-400 text-gray-600  py-4 pl-2 pr-9 rounded-md placeholder:text-sm  font-iranyekan-regular text-sm border   focus:outline-none w-full`} />
                                   {formik.errors.tel && formik.touched.tel && <p className="font-iranyekan-regular text-xs mt-2 text-red-600">{formik.errors.tel}</p>}
                              </div>
                              <div className="w-full relative">
                                   <p className="font-iranyekan-regular text-gray-500 text-sm">کد ملی</p>
                                   <svg className="w-5 h-5 absolute top-11 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                   </svg>
                                   <input maxLength={11} placeholder="09123456789" type="tel" name="tel" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`${formik.errors.tel && formik.touched.tel ? "bg-red-50 border-red-200 focus:border-red-300 hover:border-red-300" : "bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300"} mt-2  placeholder:text-gray-400 text-gray-600  py-4 pl-2 pr-9 rounded-md placeholder:text-sm  font-iranyekan-regular text-sm border   focus:outline-none w-full`} />
                                   {formik.errors.tel && formik.touched.tel && <p className="font-iranyekan-regular text-xs mt-2 text-red-600">{formik.errors.tel}</p>}
                              </div>
                         </div>
                         <hr className="mt-6"/>
                         <button className="flex items-center text-gray-600  font-iranyekan-medium gap-x-2 mt-6 justify-between px-4 text-sm bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 py-3 rounded-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                              </svg>
                              انتخاب یا تغییر رمز عبور
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                              </svg>

                         </button>
                         <hr className="mt-6"/>
                         <div className="w-full flex justify-end">
                              <button className="bg-red-600 hover:bg-red-700 duration-150 text-red-100 px-4 py-3 mt-6 rounded-md font-iranyekan-medium">ثبت تغییرات</button>
                         </div>
                    </section>
               </Dashboard_Layout>
          </Layout>
     );
}
 
export default EditProfile;