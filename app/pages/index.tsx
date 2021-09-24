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
    <div id="app" className="mx-72">
      <div className="flex justify-between gap-14 my-36">
        <div className="flex flex-col justify-center text-portfolio-text">
          <h1>{"Hi, I'm Scott Penhall"}</h1>
          <h2 className="text-portfolio-text">{"I make Full Stack websites"}</h2>
          <p>
            {
              "Here's a little taste of something I did with a new framework I found called Blitz.js"
            }
          </p>
        </div>
        <div className="rounded-full shadow-rounded w-125 h-125">
          <Image
            src={ScottMain}
            alt="Scotts Mug"
            className="rounded-full"
            width={"500"}
            height={"500"}
          />
        </div>
      </div>
      <hr />
      <div className="mt-32">
        <h2>About Me</h2>
        <p></p>
      </div>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
