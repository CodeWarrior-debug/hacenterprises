import '../styles/globals.css'
import { Lato } from '@next/font/google'
import Header from '../components/Header'

const lato = Lato({weight:['300']}, {style:['normal']},{subsets:['latin']})


export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
    html {
      font-family: ${lato.style.fontFamily};
    }
  `}</style>

{/* <Header/> */}
    
  <Component {...pageProps} />
  
    </>
  
    )
}
