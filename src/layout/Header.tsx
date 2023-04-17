import Link from "next/link";
import { useState } from "react";
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import Menu from "./Menu";
import ChangeLocation from "@components/ChangeLocation";

const Header = () => {

     const [isOpenMenu , setIsOpenMenu] = useState<boolean>(false)
     const [isOpenLocation , setIsOpenLocation] = useState<boolean>(false)

     return (  
          <header className="w-full bg-white p-4 flex flex-row justify-between">
               <Menu open={isOpenMenu} setOpen={setIsOpenMenu}/>
               <ChangeLocation open={isOpenLocation} setOpen={setIsOpenLocation}/>
               <div className=" flex gap-x-4 items-center w-full pl-4">
                    <button onClick={()=>setIsOpenMenu(true)} className="lg:hidden rounded-md bg-gray-50 p-2">
                         <HiOutlineMenuAlt3 size={25}/>
                    </button>
                    <Link href={'/'}>
                         <svg className="w-20"  xmlns="http://www.w3.org/2000/svg" width="108.931" height="27.283"  viewBox="0 0 108.931 27.283" >
                              <path d="M74.572 6.818a1.761 1.761 0 10-1.653-1.757 1.71 1.71 0 001.653 1.757m-25.566-.5a1.761 1.761 0 10-1.655-1.758 1.708 1.708 0 001.655 1.758m-3.8 0A1.761 1.761 0 1043.55 4.56a1.708 1.708 0 001.656 1.758m-31.05-.1a1.761 1.761 0 10-1.655-1.758 1.71 1.71 0 001.655 1.758m-3.8 0A1.761 1.761 0 108.701 4.46a1.71 1.71 0 001.655 1.758m71.508 17.549a1.761 1.761 0 101.655 1.759 1.708 1.708 0 00-1.655-1.759m-3.8 0a1.761 1.761 0 101.65 1.76 1.71 1.71 0 00-1.655-1.759m-38.081 0a1.761 1.761 0 101.654 1.759 1.709 1.709 0 00-1.654-1.759m-3.8 0a1.761 1.761 0 101.655 1.759 1.709 1.709 0 00-1.655-1.759" data-name="Path 3172"></path>
                              <path d="M107.233 8.86a1.446 1.446 0 00-1.406 1.482l-.008 5.065a2.837 2.837 0 01-2.8 2.9 24.788 24.788 0 01-17.7-9.433h-1.7a1.376 1.376 0 00-1 .435 1.514 1.514 0 00-.41 1.047l-.01 5.1a2.759 2.759 0 11-5.509 0l.008-5.1a1.515 1.515 0 00-.407-1.048 1.377 1.377 0 00-1-.439h-1.7v.879a5.678 5.678 0 00-2.865-.78 6.143 6.143 0 00-5.955 6.3c0 .046.005.092.006.139a2.825 2.825 0 01-2.934 2.876 2.926 2.926 0 01-2.568-3.012V.86a.879.879 0 00-.237-.607A.8.8 0 0058.46 0h-1.47a.839.839 0 00-.815.86v14.349c0 3.465 2.679 6.415 5.956 6.358a5.707 5.707 0 004.232-2.038 5.713 5.713 0 008.719.036 5.7 5.7 0 004.367 2.083 6.038 6.038 0 005.856-6.192v-1.97c5.879 5.544 15.509 9.114 19.34 7.886v-.006a6.154 6.154 0 004.272-5.956l.012-6.548h-1.7zm-36.5 9.428a2.933 2.933 0 01-2.849-2.88v-.035c0-.036-.005-.069-.005-.1a2.86 2.86 0 112.855 3.02M49.45 10.342l-.007 5.079a2.76 2.76 0 11-5.512 0l.012-5.071a1.5 1.5 0 00-.855-1.369 1.345 1.345 0 00-.547-.118h-1.7l-.01 6.559a2.835 2.835 0 01-2.922 2.953 2.806 2.806 0 01-2.423-1.9 8.5 8.5 0 01-.291-1.6 6.08 6.08 0 00-1.194-2.644l-3.358-4.222 5.471-5.452a.846.846 0 00.029-1.153L35.126.257a.738.738 0 00-1.083-.036l-6.535 6.511.012.014a1.662 1.662 0 00-.1 2.188c3.567 4.6 4.778 5.269 4.788 6.559a2.782 2.782 0 01-2.382 2.816 2.818 2.818 0 01-3.118-2.889l.008-5.061a1.447 1.447 0 00-1.4-1.486h-1.7a24.791 24.791 0 01-17.701 9.436 2.837 2.837 0 01-2.8-2.9l-.012-5.1a1.446 1.446 0 00-1.406-1.482h-1.7l.014 6.582a6.154 6.154 0 004.274 5.956v.006c3.828 1.227 13.448-2.335 19.325-7.873v1.922a6 6 0 005.854 6.189 5.482 5.482 0 004.254-2 5.669 5.669 0 008.661 0 5.7 5.7 0 004.305 2.01 6.037 6.037 0 005.859-6.198l.011-6.559h-1.7a1.446 1.446 0 00-1.406 1.482" data-name="Path 3173"></path>
                        </svg>               
                    </Link>
                   <Link href={'/'} className=" hidden lg:flex whitespace-nowrap text-gray-500 hover:bg-red-50 hover:text-red-600 duration-150  gap-x-1 items-center py-2 px-2 rounded-lg font-iranyekan-regular text-xs">
                         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                         </svg>
                         فیلم و تئاتر
                    </Link>
                    <Link href={'/'} className="hidden lg:flex whitespace-nowrap text-gray-500 hover:bg-red-50 hover:text-red-600 duration-150  gap-x-1 items-center py-2 px-2 rounded-lg font-iranyekan-regular text-xs">
                         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                         </svg>
                         سینما
                    </Link>
                    <div className="w-full relative hidden sm:inline-block">
                         <svg className="w-[20px] h-[20px] absolute top-3 right-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                         </svg>
                         <input maxLength={60} placeholder="جست‌وجوی فیلم، سینما، کارگردان، بازیگر و ..." type="tel" name="password" className={` placeholder:text-xs placeholder:text-gray-400 w-full bg-gray-50 border-gray-200 hover:border-gray-300 focus:border-gray-300 text-gray-600  py-3 pl-2 pr-10 rounded-md font-iranyekan-regular text-sm border   focus:outline-none`} />
                    </div>
               </div>
               <div className="sm:w-fit lg:w-1/2 flex gap-x-4 items-center justify-end ">
                    <button onClick={()=> setIsOpenLocation(true)} className="hidden lg:flex whitespace-nowrap text-gray-500 hover:bg-red-50 hover:text-red-600 duration-150 gap-x-1 items-center py-2 px-2 rounded-lg font-iranyekan-regular text-xs">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                         </svg>
                         تهران
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                         </svg>
                    </button>
                    {/* Map */}
                    <button className=" lg:hidden text-gray-500 p-2 hover:bg-red-50 duration-150 hover:text-red-600 rounded-md">
                         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                         </svg>
                    </button>
                    <Link href={'/'} className="flex whitespace-nowrap text-gray-500 hover:bg-red-50 hover:text-red-600 duration-150 gap-x-1 items-center py-2 px-2 rounded-lg font-iranyekan-regular text-xs">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                         </svg>
                         بلیط های من
                    </Link>
                    <Link href={'/auth/login'} className="hidden lg:flex whitespace-nowrap text-gray-500 hover:bg-red-50 hover:text-red-600 duration-150 gap-x-1 items-center py-2 px-2 rounded-lg font-iranyekan-regular text-xs">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                         </svg>
                         پروفایل
                    </Link>
               </div>

          </header>
     );
}
 
export default Header;