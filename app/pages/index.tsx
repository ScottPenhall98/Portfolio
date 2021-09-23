import React from "react"
import { Image, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import ScottMain from "../../public/Profile.jpg"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  return (
    <div className="w-full flex justify-center">
      <Image
        src={ScottMain}
        alt="Scotts Mug"
        className="rounded-full"
        width={"500"}
        height={"500"}
      />
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
