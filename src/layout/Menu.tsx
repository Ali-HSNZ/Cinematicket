import { Modal } from "@mui/material";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import {HiOutlineNewspaper} from 'react-icons/hi'
import {BsJournalMedical , BsQuestionCircle} from 'react-icons/bs'
import {MdOutlineLocalMovies , MdPrivacyTip} from 'react-icons/md'
import {FaFileArchive} from 'react-icons/fa'
import {AiOutlineBarChart , AiOutlineExclamationCircle} from 'react-icons/ai'
import {GiFilmProjector} from 'react-icons/gi'
import {IoIosCall} from 'react-icons/io'
type ModalProps = {
     open : boolean,
     setOpen :  Dispatch<SetStateAction<boolean>>
}

const Menu : FC<ModalProps> = ({open , setOpen}) => {
     return (  
          <Modal className="lg:hidden" open={open || false} onClose={() => setOpen(false)}>
               <nav className="bg-white w-full flex flex-col h-auto absolute rounded-t-xl pt-6 bottom-0">                         
                    <Link href="/" className="text-sm font-iranyekan-regular items-center text-gray-600 flex gap-x-2 px-6 py-3 w-full border-b border-gray-100" >
                         <MdOutlineLocalMovies size={25}/>
                         فیلم ها
                    </Link>
                    <Link href="/" className="text-sm font-iranyekan-regular items-center text-gray-600 flex gap-x-2 px-6 py-3 w-full border-b border-gray-100" >
                         <BsJournalMedical size={25}/>
                         مجله سینما تیکت     
                    </Link>
                    
                    <Link href="/" className="text-sm font-iranyekan-regular items-center text-gray-600 flex gap-x-2 px-6 py-3 w-full border-b border-gray-100" >
                         <FaFileArchive size={25}/>
                         آرشیو فیلم ها
                    </Link>
                    
                    <Link href="/" className="text-sm font-iranyekan-regular items-center text-gray-600 flex gap-x-2 px-6 py-3 w-full border-b border-gray-100" >
                         <AiOutlineBarChart size={25}/>
                         جدول فروش
                    </Link>
                    
                    <Link href="/" className="text-sm font-iranyekan-regular items-center text-gray-600 flex gap-x-2 px-6 py-3 w-full border-b border-gray-100" >
                         <GiFilmProjector size={25}/>
                         برنامه های آینده
                    </Link>
                    
                    <Link href="/" className="text-sm font-iranyekan-regular items-center text-gray-600 flex gap-x-2 px-6 py-3 w-full border-b border-gray-100" >
                         <IoIosCall size={25}/>
                         تماس با سینماتیکت
                    </Link>
                    
                    <Link href="/" className="text-sm font-iranyekan-regular items-center text-gray-600 flex gap-x-2 px-6 py-3 w-full border-b border-gray-100" >
                         <BsQuestionCircle size={25}/>
                         سوالات متداول
                    </Link>
                    
                    <Link href="/" className="text-sm font-iranyekan-regular items-center text-gray-600 flex gap-x-2 px-6 py-3 w-full border-b border-gray-100" >
                         <MdPrivacyTip size={25}/>
                         قوانین و مقررات
                    </Link>
                    
                    <Link href="/" className="text-sm font-iranyekan-regular items-center text-gray-600 flex gap-x-2 px-6 py-3 w-full border-b border-gray-100" >
                         <AiOutlineExclamationCircle size={25}/>
                         درباره ما
                    </Link>
               </nav>
          </Modal>
     );
}
 
export default Menu;