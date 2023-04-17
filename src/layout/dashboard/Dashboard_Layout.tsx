import Dashboard_Menu from '@layout/dashboard/Dashboard_Menu'
type pageProps = {
     children : JSX.Element
}
const Dashboard_Layout : React.FC<pageProps> = ({children}) => {
     return (  
          <section className='w-full  flex '>
               <Dashboard_Menu />
               <div className='w-full h-auto p-6'>
                    {children}
               </div>
          </section>
     );
}
 
export default Dashboard_Layout;