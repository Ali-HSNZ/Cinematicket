import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { TAppDispatch, wrapper} from '@store/store'
// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// More
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { http , apikey } from '@services/http';
import { userToken } from '@utils/cookie';


function App({ Component, pageProps }: AppProps) {

  const dispatch = useDispatch<TAppDispatch>()
  
  useEffect(()=>{
    const loadUserInfo = async() => {
      const data = await http.get('/user/profile', {headers : {apikey , token : userToken}})
       .then(res => res.data)
       .catch(error => {
            const message = error?.response?.data?.errors ?? "متاسفانه ورود شما با خطا مواجه شده است."
            throw {message}
       })
       return data
    }
  },[])

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={true} pauseOnFocusLoss draggable pauseOnHover theme="dark" /> 
    </>

  )
}
export default wrapper.withRedux(App);