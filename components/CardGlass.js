import React from 'react'
import styles from "../styles/cardGlass.module.css"
import cls from 'classnames'
import Link from 'next/link'
import { boasts } from '../public/majorBoastitems'

const CardGlass = (props) => {
  return (
    <>
    <div className='h-full w-2/5'>

    {
      boasts.map((item)=>{
        return(
          <>
    <div className={cls(styles.cardGlass, "mb-4 " )}  >
        
    <h2 className={cls(styles.title, "mb-2 font-extrabold text-green")}>{item.title}</h2>
    <Link  href={item.url} className='text-base text-blue-100 p-0 m-0'>Learn More!</Link>
  </div>
  </>
  )
}

)


}      
      </div>
    </>
  )
}

export default CardGlass
