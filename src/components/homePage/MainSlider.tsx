//! ====Swiper====>
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation} from "swiper";
import "swiper/css/free-mode";
//! <====Swiper====

const MainSlider = () => {
     return (  
          <Swiper 
          className={"overflow-hidden mt-6 _swiper"} 
          freeMode={false} 
          navigation={true} 
          spaceBetween={16} 
          modules={[ Navigation]}
          slidesPerView={1}
     >
          {[1,2,3,4,5,6].map((item,idx)=>(
               <SwiperSlide key={idx}>
                    <div className="w-auto h-[300px]  flex justify-between px-6">
                        <img className="absolute   inset-0 z-0  contrast-75 drop-shadow-md" src="https://static.cdn.asset.cinematicket.org/media/image/2023/4/c84ed596-254c-4af0-af7c-55de0541d183_desktop.jpeg" alt="" />
                        <div className="bg-gradient-to-r from-transparent to-black absolute inset-0"></div>
                        <div className="relative z-10 p-8 flex gap-x-6">
                          <img className="h-full w-auto rounded-md" src="https://static.cdn.asset.cinematicket.org/media/cache/38/5e/385ec2628ac2035f65b97191282af25e.jpg" alt="" />
                          <div>
                            <h4 className="font-iranyekan-bold mt-6 text-xl text-gray-100">سه کام حبس</h4>
                            <h5 className="font-iranyekan-regular text-sm mt-4 text-gray-300">کارگردان: سامان سالور </h5>
                            <div className="mt-6 flex gap-x-4">
                              <h6 className="font-iranyekan-regular text-gray-300 text-xs border border-slate-700 py-2 px-4 rounded-full">جنگ دفاعیه مقدس</h6>
                              <h6 className="font-iranyekan-regular text-gray-300 text-xs border border-slate-700 py-2 px-4 rounded-full">106 دقیقه</h6>
                            </div>
                            <p className="text-gray-200 text-xs font-iranyekan-regular mt-6">فیلم سه کام حبس به کارگردانی، نویسندگی سامان سالور و تهیه‌کنندگی ساسان سالور و محصول سال 1398 است. </p>
                          </div>
                        </div>
                        <div className="relative z-10">
                          <img className="cursor-pointer rounded-md w-auto h-full object-cover" src="	https://static.cdn.asset.cinematicket.org/media/cache/19/36/1936f31a1fb7cf5f0d567d47699da74a.webp"/>                                   
                        </div>
                    </div>
               </SwiperSlide>
          ))}

     </Swiper>
     );
}
 
export default MainSlider;