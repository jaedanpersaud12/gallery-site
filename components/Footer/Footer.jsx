import React from "react"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="mx-auto px-10 sticky top-0 z-30 transition-all duration-300 text-black bg-white dark:bg-black dark:text-gray-200">
      <div className="border-t">
        <div className="flex justify-between py-14">
          <div>
            <h2 className="fancy uppercase tracking-widest  text-[10px] pl-4">
              Think Artwork TT
            </h2>
          </div>
          <div className="flex gap-x-4 pr-4">
            <AiOutlineInstagram />
            <FaFacebookF />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
