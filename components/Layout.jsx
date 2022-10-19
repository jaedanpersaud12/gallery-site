import React from "react"
import { Header } from "./"

const Layout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-black transition-all duration-300">
      <Header />
      {children}
    </div>
  )
}

export default Layout
