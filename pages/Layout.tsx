import React from 'react'
 import Header from './Header'
import IndexPage from './IndexPage'


const Layout = ({children}) => {
  return (
    <div>
       <Header>
       </Header>
       {children}

    </div>
  )
}

export default Layout