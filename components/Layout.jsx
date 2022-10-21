import React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Layout = ({ children }) => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
