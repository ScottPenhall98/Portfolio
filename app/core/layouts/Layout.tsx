import React, { ReactNode, Suspense } from "react"
import { Head } from "blitz"
import Navbar from "../components/Navbar"
import ColorPallet from "./ColorPallet"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  const colors = ColorPallet()

  return (
    <Suspense fallback="Loading...">
      <Head>
        <title>{title || "portfolio"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`h-screen ${colors["background"]}`}>
        <Navbar />
        <div className={"mt-10"}>{children}</div>
      </div>
    </Suspense>
  )
}

export default Layout
