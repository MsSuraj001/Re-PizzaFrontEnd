import React from 'react'
import Layout from '../../Layouts/Layout'
import Pepsi from '../../assets/Images/pepsi.png'
import MenuCard from './HeaderCard/MenuCard'

function Menu(props) {
  return (
    <Layout>
      {/* this is the cart One */}
      {/* <div className='container bg-yellow-200 w-1/3 border flex items-center flex-col'>
          <img className='cover h-60' src={Pepsi} alt="" />
          <h1>Prodect Name</h1>
      </div> */}
      <MenuCard  />
      <MenuCard  />
      <MenuCard  />
      <MenuCard  />
    </Layout>
  )
}

export default Menu
