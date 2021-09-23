import React from "react"
import Logo from "./Logo"
import RightNav from "./RightNav"

const Navbar = () => {
  return (
    <div className={`p-4 flex justify-between hover:bg-black sticky h-navbar shadow-2xl`}>
      <Logo />
      <RightNav />
    </div>
  )
}

export default Navbar
