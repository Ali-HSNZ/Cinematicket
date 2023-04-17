import React from "react";
import Header from "./Header";

type TLayoutProps = {
     children : JSX.Element
}

const Layout : React.FunctionComponent<TLayoutProps> = ({children}) : JSX.Element => {
     return (  
          <main className='w-full flex flex-col items-center justify-center'>
               <Header/>

               <main className='w-full h-auto'>
                    {children}
               </main>
          </main>
     );
}
 
export default Layout;