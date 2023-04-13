import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
const AuthLogin = () => {
     const {query} = useRouter()
     
     return (  
          <main className="w-full flex justify-center items-center h-auto">
               <Head>
                    <title>ورود | سینماتیکت</title>
               </Head>
               <section className="w-full max-w-[450px] mt-16 px-6">
                    <div className="w-full flex justify-center">
                         <img className="w-[130px] h-auto object-cover" src="https://cinematicket.org/v3.15.0/assets/images/typo_logo.svg" alt=""/>
                    </div>
                    <Link href={`${query?.returnUrl ?? '/'}`} className="mt-4 w-fit font-iranyekan-regular  flex items-center rounded-md border hover:border-gray-400 text-second px-4 text-sm py-2 gap-x-1.5 bg-white">
                         <svg  className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                         </svg>
                         بازگشت    
                    </Link>
                    <section className="w-full bg-white p-6 mt-4 rounded-lg">
                         <h5 className="font-iranyekan-bold text-main text-2xl text-center w-full">ثبت نام</h5>
                         <hr className="mt-4 border-gray-300"/>
                         <div className="flex flex-col justify-between items-end gap-x-6 mt-6">
                              <div className="w-full flex flex-col  gap-6">
                                   <div className="w-full relative">
                                        <p className="font-iranyekan-regular text-gray-500 text-sm">شماره همراه</p>
                                        <svg className="w-5 h-5 absolute top-10 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                        <input className="mt-2 bg-gray-50 placeholder:text-gray-500 text-gray-600  py-3 pl-2 pr-9 rounded-md font-iranyekan-regular text-sm border border-gray-200 focus:border-gray-300 hover:border-gray-300 focus:outline-none w-full  " type="text" />
                                   </div>
                                   <div className="w-full relative">
                                        <p className="font-iranyekan-regular text-gray-500 text-sm">رمز ورود</p>
                                        <svg className="w-5 h-5 absolute top-10 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                        </svg>
                                        <input className="mt-2 bg-gray-50 placeholder:text-gray-500 text-gray-600  py-3 pl-2 pr-9 rounded-md font-iranyekan-regular text-sm border border-gray-200 focus:border-gray-300 hover:border-gray-300 focus:outline-none w-full  " type="text" />
                                   </div>
                                   <div className="w-full relative">
                                        <p className="font-iranyekan-regular text-gray-500 text-sm">تکرار رمز ورود</p>
                                        <svg className="w-5 h-5 absolute top-10 right-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                        </svg>
                                        <input className="mt-2 bg-gray-50 placeholder:text-gray-500 text-gray-600  py-3 pl-2 pr-9 rounded-md font-iranyekan-regular text-sm border border-gray-200 focus:border-gray-300 hover:border-gray-300 focus:outline-none w-full  " type="text" />
                                   </div>
                              </div>
                              <button disabled className="mt-4 disabled:bg-gray-600  disabled:cursor-not-allowed disabled:text-gray-200  bg-red-500 hover:bg-red-600 duration-150 rounded-md text-sm font-iranyekan-bold text-red-100 px-10 py-3 h-fit">ثبت نام</button>
                         </div>
                    </section>
               </section>
          </main>
     );
}
 
export default AuthLogin;