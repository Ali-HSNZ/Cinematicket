import { http } from "@services/http";

const GetKey = () => {

     const onSubmit = (e : FormDataEvent) => {
          e.preventDefault()
          http.get('/getapikey')
     }

     return (  
          <form onSubmit={e => onSubmit(e)}>
               <button type="submit" className="bg-green-500 px-6 py-2 ">
                    Get Key
               </button>
          </form>
     );
}
 
export default GetKey;