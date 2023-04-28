import Layout from "@layout/Layout";
import Dashboard_Layout from "@layout/dashboard/Dashboard_Layout";
import Link from "next/link";

const TicketsPage = () => {
     return (  
          <Layout>
               <Dashboard_Layout>
                    <section className="h-full w-full justify-center flex flex-col items-center ">
                         <img className="w-52" src="https://cinematicket.org/v3.15.1/assets/images/no_data/ticket.svg" alt="Empty Transaction" />
                         <h3 className="font-iranyekan-bold text-gray-800 mt-6">تا به‌حال بلیتی نخریدید!</h3>
                         <h5 className="font-iranyekan-regular text-gray-600 mt-2">در این صفحه بلیت‌های فعال و بلیت‌های که قبلا خریده‌اید به شما نمایش داده‌ می‌شود.</h5>
                         <Link className="bg-[#ff3543] hover:bg-red-600 rounded-md text-red-100 px-6 py-3 font-iranyekan-bold mt-6 duration-150" href={'/'}>مشاهده فیلم‌ها و خرید بلیت</Link>
                    </section>
               </Dashboard_Layout>
          </Layout>
     );
}
 
export default TicketsPage;