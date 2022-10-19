import "../styles/globals.css"
import React, { useEffect, useState } from "react"
import { Layout } from "../components"
import AOS from "aos"
import "aos/dist/aos.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
