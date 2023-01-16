import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

const ListItem = (name) => {
  return (
    <>
      <li className='list-none'>
        <FontAwesomeIcon icon="fa-solid faPlay"/>
        {name}
      </li>
    </>
  )
}

export default ListItem
