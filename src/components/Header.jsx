import React from 'react'
import "./Styles/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <>
    <header className="lg:flex justify-between p-6 items-center border-b-2 rounded shadow-lg ">
        <div className= 'lg:pl-3 text-2xl'>ToDo List</div>
        <div><FontAwesomeIcon icon={faCircleUser} size="2x" /></div>
    </header>
    </>
  )
}

export default Header
