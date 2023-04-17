import Layout from "@layout/Layout"
import Dashboard_Layout from "@layout/dashboard/Dashboard_Layout";
import { useFormik } from "formik";

const EditProfile = () => {

     const onSubmit = () => {

     }

     const formik = useFormik({
          initialValues : {
               full_name : "",
               tel : "",
               email : '',

          },
          onSubmit
     })

     return (  
          <Layout>
               <Dashboard_Layout>
                    <section className="bg-white p-6 rounded-md">
                         <div className="w-[100px] h-[100px] relative rounded-full overflow-hidden">
                              <input type="file" id="inputFile" className="hidden"/>
                              <img className="w-full h-full object-cover" src="https://cinematicket.org/v3.15.0/assets/images/placeholder/profile-mine.svg"/>
                              <label htmlFor="inputFile" className="w-full h-full cursor-pointer rounded-full flex items-center justify-center text-gray-300 bg-gray-900 bg-opacity-70 absolute inset-0">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                   </svg>
                              </label>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                              <div className="w-full relative">
                                   <p className="font-iranyekan-regular text-gray-500 text-sm">نام و نام خانوادگی</p>
                                   <svg className="w-5 h-5 absolute top-11 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                   </svg>

                                   <input maxLength={24} type="tel" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`${formik.errors.password && formik.touched.password ? "bg-red-50 border-red-200 focus:border-red-300 hover:border-red-300" : "bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300"} mt-2  placeholder:text-gray-500 text-gray-600  py-4 pl-2 pr-9 rounded-md font-iranyekan-regular text-sm border   focus:outline-none w-full`} />
                              </div>
                              <div className="w-full relative">
                                   <p className="font-iranyekan-regular text-gray-500 text-sm">شماره موبایل</p>
                                   <svg className="w-5 h-5 absolute top-11 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                   </svg>
                                   <input maxLength={24} type="tel" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`${formik.errors.password && formik.touched.password ? "bg-red-50 border-red-200 focus:border-red-300 hover:border-red-300" : "bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300"} mt-2  placeholder:text-gray-500 text-gray-600  py-4 pl-2 pr-9 rounded-md font-iranyekan-regular text-sm border   focus:outline-none w-full`} />
                              </div>
                              <div className="w-full relative">
                                   <p className="font-iranyekan-regular text-gray-500 text-sm">ایمیل</p>
                                   <svg className="w-5 h-5 absolute top-11 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                   </svg>
                                   <input maxLength={24} type="tel" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`${formik.errors.password && formik.touched.password ? "bg-red-50 border-red-200 focus:border-red-300 hover:border-red-300" : "bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300"} mt-2  placeholder:text-gray-500 text-gray-600  py-4 pl-2 pr-9 rounded-md font-iranyekan-regular text-sm border   focus:outline-none w-full`} />
                              </div>
                              <div className="w-full relative">
                                   <p className="font-iranyekan-regular text-gray-500 text-sm">تاریخ</p>
                                   <svg className="w-5 h-5 absolute top-11 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                   </svg>
                                   <input maxLength={24} type="tel" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`${formik.errors.password && formik.touched.password ? "bg-red-50 border-red-200 focus:border-red-300 hover:border-red-300" : "bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300"} mt-2  placeholder:text-gray-500 text-gray-600  py-4 pl-2 pr-9 rounded-md font-iranyekan-regular text-sm border   focus:outline-none w-full`} />
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