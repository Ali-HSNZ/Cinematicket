import Link from "next/link";
import { useRouter } from "next/router";
const Menu = () => {
     const router = useRouter()

     return (  
          <nav className="bg-white hidden lg:flex flex-col gap-y-2 h-screen sticky top-0 overflow-y-auto min-w-[300px] max-w-[300px] p-4">
               <Link href={'/'} className={`w-full py-4 px-2 ${router.asPath.startsWith('/dashboard/edit_profile') ? "bg-red-50 border-red-200" : "hover:bg-red-50 border-transparent hover:border-red-200"} group rounded-md border flex items-center justify-between font-iranyekan-regular text-sm`}>
                    <div className={`flex items-center gap-x-2 ${router.asPath.startsWith('/dashboard/edit_profile') ? "text-red-600" : "group-hover:text-red-600 text-gray-700"}  `}>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                         </svg>
                         اطلاعات کاربری
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${router.asPath.startsWith('/dashboard/edit_profile') ? "text-red-600" : "text-gray-600 group-hover:text-red-600"}`}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
               </Link>
               <Link href={'/'} className={`w-full py-4 px-2 ${router.asPath.startsWith('/dashboard/c') ? "bg-red-50 border-red-200" : "hover:bg-red-50 border-transparent hover:border-red-200"} group rounded-md border flex items-center justify-between font-iranyekan-regular text-sm`}>
                    <div className={`flex items-center gap-x-2 ${router.asPath.startsWith('/dashboard/c') ? "text-red-600" : "group-hover:text-red-600 text-gray-700"}  `}>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                         </svg>
                         احراز هویت
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${router.asPath.startsWith('/dashboard/c') ? "text-red-600" : "text-gray-600 group-hover:text-red-600"}`}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
               </Link>
               <Link href={'/'} className={`w-full py-4 px-2 ${router.asPath.startsWith('/dashboard/c') ? "bg-red-50 border-red-200" : "hover:bg-red-50 border-transparent hover:border-red-200"} group rounded-md border flex items-center justify-between font-iranyekan-regular text-sm`}>
                    <div className={`flex items-center gap-x-2 ${router.asPath.startsWith('/dashboard/c') ? "text-red-600" : "group-hover:text-red-600 text-gray-700"}  `}>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                         </svg>
                         تراکنش ها
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${router.asPath.startsWith('/dashboard/c') ? "text-red-600" : "text-gray-600 group-hover:text-red-600"}`}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
               </Link>
               <Link href={'/'} className={`w-full py-4 px-2 ${router.asPath.startsWith('/dashboard/c') ? "bg-red-50 border-red-200" : "hover:bg-red-50 border-transparent hover:border-red-200"} group rounded-md border flex items-center justify-between font-iranyekan-regular text-sm`}>
                    <div className={`flex items-center gap-x-2 ${router.asPath.startsWith('/dashboard/c') ? "text-red-600" : "group-hover:text-red-600 text-gray-700"}  `}>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                         </svg>
                         بلیط های من
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${router.asPath.startsWith('/dashboard/c') ? "text-red-600" : "text-gray-600 group-hover:text-red-600"}`}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
               </Link>
          </nav>
     );
}
 
export default Menu;