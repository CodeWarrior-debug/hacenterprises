import '../styles/globals.css'
import { Plus_Jakarta_Sans } from '@next/font/google'

const plus_jakarta=Plus_Jakarta_Sans({style:['normal']}, {subsets:['latin-ext']})

export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
    html {
      font-family: ${plus_jakarta.style.fontFamily};
    }
  `}</style>

{/* <Header/> */}
    
  <Component {...pageProps} />
  
    </>
  
    )
}

