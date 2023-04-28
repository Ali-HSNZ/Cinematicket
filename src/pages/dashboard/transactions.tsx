import Layout from "@layout/Layout";
import Dashboard_Layout from "@layout/dashboard/Dashboard_Layout";

const TransactionsPage = () => {
     return (  
          <Layout>
               <Dashboard_Layout>
                    <section className="h-full w-full justify-center flex flex-col items-center ">
                         <div>
                              <img className="w-52" src="https://cinematicket.org/v3.15.1/assets/images/no_data/transaction.svg" alt="Empty Transaction" />
                         </div>
                         <h3 className="font-iranyekan-bold text-gray-800 mt-6">تا به‌حال تراکنشی انجام نداده‌اید!</h3>
                         <h5 className="font-iranyekan-regular text-gray-600 mt-2">در این صفحه تراکنش های شما نمایش داده می‌شود.</h5>
                    </section>
               </Dashboard_Layout>
          </Layout>
     );
}
 
export default TransactionsPage;