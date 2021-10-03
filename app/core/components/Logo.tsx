import React from "react"
import Penguin from "../../../public/penguin_default.png"
import { Image } from "blitz"

const Logo = () => {
  return (
    <>
      <Image src={Penguin} alt="Penguin Logo" width={"75"} height={"75"} />
    </>
  )
}

export default Logo
