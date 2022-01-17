import React from 'react'
import { SidebarContainer } from './style'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useUserContext } from '../context/user_context'

const Sidebar = () => {
  const isOpen = true
  return (
    <SidebarContainer>
        <aside className={`${isOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
          <div className="sidebar-header">
            <img src={logo} alt="comfy sloth" className="logo" />
            <button className="close-btn" type='button'>
              <FaTimes/>
            </button>
          </div>
          <ul className="links">
              {links.map(({id,text,url})=> {
                return (
                  <li key={id}>
                    <NavLink to={url}>
                        {text}
                    </NavLink>                 
                  </li>
                )
              })}
              <li>
                    <NavLink to='/checkout'>
                        checkout
                    </NavLink>                 
               </li>
          </ul>
          <CartButtons/>
        </aside>
    </SidebarContainer>
  )
}


export default Sidebar
