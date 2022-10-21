import React, { useState } from "react"

const CurrentPage = ({ current, setCurrent, currentPage }) => {
  const [color, setColor] = useState()
  const switchColor = () => {
    switch (current) {
      case "overview":
        return "text-red"
      case "works":
        return "text-ora"
      case "biography":
        return "text-yel"
      case "exhibitions":
        return "text-gre"
      case "enquire":
        return "text-blu"
      default:
        break
    }
  }
  const switchHover = () => {
    switch (currentPage) {
      case "overview":
        return "hover:text-red"
      case "works":
        return "hover:text-ora"
      case "biography":
        return "hover:text-yel"
      case "exhibitions":
        return "hover:text-gre"
      case "enquire":
        return "hover:text-blu"
      default:
        break
    }
  }

  return (
    <li>
      <button
        className={`uppercase tracking-[.4em] text-[10px] ${switchHover()} ${
          current == currentPage && `${switchColor()}`
        }`}
        onClick={() => {
          setCurrent(currentPage)
        }}
      >
        {currentPage}
      </button>
    </li>
  )
}

export default CurrentPage
