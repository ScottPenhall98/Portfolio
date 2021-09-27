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
      <div className="h-screen flex  justify-between gap-14 -mt-28">
        <div className="flex flex-col justify-center text-portfolio-text">
          <h1>{"Hi, I'm Scott Penhall"}</h1>
          <h2 className="text-portfolio-text">{"I make Full Stack websites"}</h2>
          <p>
            {
              "Here's a little taste of something I did with a new framework I found called Blitz.js"
            }
          </p>
        </div>
        <div className="rounded-full shadow-rounded w-125 h-125 my-auto">
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
      <div className="mt-32 text-portfolio-text flex-col flex space-y-4 mb-32">
        <h2>About Me</h2>
        <div>
          <p className="text-portfolio-primary">Languages and Frameworks I work with:</p>
          <ul>
            <li>Blitz JS (what this is made in)</li>
            <li>Laravel</li>
            <li>React</li>
            <li>Laravel/React</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>Silver Stripe 3</li>
            <li>Python</li>
            <li>C#</li>
            <li>.NET</li>
          </ul>
        </div>
        <p>
          {" "}
          <span className="text-portfolio-primary">Education: </span>Bacholor Of Computer systems at
          EIT
        </p>
        <p>
          <span className="text-portfolio-primary">Love For Coding started </span>
          when I was really young, I loved to make things and I knew when I grew up my job would
          have to involve making things. I found a love for the Arts and making paintings, and the
          joy my creations brought to others, that evolved in high school to which I did some of my
          first scripts, including a snakes and ladders game and Scenario built apps. I then got
          addicted when I would stay up hours on end coding my very own games with Unity
        </p>
      </div>
      <hr />
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
