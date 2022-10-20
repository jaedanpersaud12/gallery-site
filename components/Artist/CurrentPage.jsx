import React from "react"

const CurrentPage = ({ current, setCurrent, currentPage }) => {
  return (
    <li>
      <button
        className={`uppercase tracking-[.4em] text-[10px] ${
          current == currentPage && `underline underline-offset-4`
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
