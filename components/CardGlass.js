import React from 'react'
import styles from "../styles/cardGlass.module.css"
import cls from 'classnames'
import Link from 'next/link'
import { boasts } from '../public/majorBoastitems'

const CardGlass = (props) => {
  return (
    <>
    {
boasts.map((item)=>{
  return(
    <>
    <div className={cls(styles.cardGlass, "cardGlass w-2/5 mb-4")}  >
        
    <h2 className={cls(styles.title, "mb-2 font-extrabold text-green")}>{item.title}</h2>
    <Link  href={item.url} className='text-base text-blue-100 '>Learn More!</Link>
  </div>
  </>
  )
}

)


    }  {/* <div className={cls(styles.cardGlass, "w-2/5")}  >
        
        <h2 className={cls(styles.title, "mb-2 font-extrabold text-green")}>This is my title</h2>
        <p className='text-base text-blue-100 '>laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
      </div> */}
    
    </>
  )
}

export default CardGlass
