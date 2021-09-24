import tailwindConfig from "../../../tailwind.config"
import resolveConfig from "tailwindcss/resolveConfig"
import React from "react"

const ColorPallet = () => {
  // const CurrentColorPallet = window.localStorage.getItem('pallet') ? window.localStorage.getItem('pallet') : 'default';
  const Colors = {
    default: {
      primary: "#ff9e5a",
      background: "#3d3e42",
      text: "#FFF",
    },
    new: {
      primary: "#3d3e42",
      background: "#ff9e5a",
      text: "#FFF",
    },
  }

  const changeColor = (color) => {
    let currentColors = Colors[color]
    document.documentElement.style.setProperty("--portfolio-background", currentColors.background)
    document.documentElement.style.setProperty("--portfolio-text", currentColors.text)
    document.documentElement.style.setProperty("--portfolio-primary", currentColors.primary)
  }

  return (
    <div className="flex space-x-4">
      <button
        className="button small text-portfolio-text"
        onClick={() => {
          changeColor("default")
        }}
      >
        Default Color
      </button>
      <button
        className="button small text-portfolio-text"
        onClick={() => {
          changeColor("new")
        }}
      >
        New Colors
      </button>
    </div>
  )
}

export default ColorPallet
