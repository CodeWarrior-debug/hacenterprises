import '../styles/globals.css'
import { Lato, Red_Hat_Display } from '@next/font/google'


const red_hat = Red_Hat_Display({weight:['500']},{style:['normal']})


export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
    html {
      font-family: ${red_hat.style.fontFamily};
    }
  `}</style>

{/* <Header/> */}
    
  <Component {...pageProps} />
  
    </>
  
    )
}
