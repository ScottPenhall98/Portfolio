import tailwindConfig from "../../../tailwind.config"
import resolveConfig from "tailwindcss/resolveConfig"

const ColorPallets = () => {
  // const CurrentColorPallet = window.localStorage.getItem('pallet') ? window.localStorage.getItem('pallet') : 'default';
  const fullConfig = resolveConfig(tailwindConfig)
  const Colors = {
    primary: "default-primary-color",
    background: "bg-default-background",
    text: "default-text-color",
  }

  return Colors
}

export default ColorPallets
