import React from 'react'
import styles from "../styles/htmlhomepage.module.css"
import cls from 'classnames'


const CardGlass = () => {
  return (
    <>
    

      <div className={cls(styles.cardGlass, "w-2/5 m-8 mr-32 text-blue-500")}  >
        
        <h2 className={cls(styles.title, "mb-2 font-bold")}>This is my title</h2>
        <p className='text-base text-blue-100'>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
      </div>

    
    </>
  )
}

export default CardGlass
