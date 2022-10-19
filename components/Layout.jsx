import React from "react"
import { Header } from "./"

const Layout = ({ children }) => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
      <Header />
      {children}
    </div>
  )
}

export default Layout
