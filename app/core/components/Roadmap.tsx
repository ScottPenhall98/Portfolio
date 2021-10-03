import React from "react"

type RoadMapNode = {
  name: string
  description: string
  website: string
  startedAt: Date
  endedAt?: Date
}

const LinkToSite = ({ location, className, children }) => {
  return (
    <a href={location} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  )
}

// on the const we use [{}: RoadMapNode,]
const RoadMap = () => {
  const RoadMapNodes: RoadMapNode[] = [
    {
      name: "Fingermark",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
        " et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
        " ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat " +
        "nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim " +
        "id est laborum.",
      website: "https://www.fingermark.tech/",
      startedAt: new Date("2018-8-1"),
      endedAt: new Date("2020-5-13"),
    },
    {
      name: "Webfox",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
        " et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
        " ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat " +
        "nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim " +
        "id est laborum.",
      website: "https://www.webfox.co.nz/",
      startedAt: new Date("2020-9-2"),
      endedAt: undefined,
    },
  ]

  return (
    <div className="my-32">
      <h2 className="mb-4">Road Map</h2>
      {RoadMapNodes.map((node) => (
        <div key={node.name} className="flex">
          <div className="flex flex-col items-center">
            <LinkToSite
              location={node.website}
              className="bg-portfolio-primary w-4 h-4 rounded-full my-4 relative"
            >
              {!node.endedAt && (
                <div className="border-4 border-portfolio-primary w-4 h-4 rounded-full my-4 pulse absolute -top-4" />
              )}
            </LinkToSite>
            {node.endedAt && <div className="bg-portfolio-primary w-px h-48 rounded" />}
          </div>
          <div className="ml-32 mt-2">
            <LinkToSite className="" location={node.website}>
              <h3 className={"text-portfolio-primary"}>{node.name}</h3>
            </LinkToSite>
            <p className="text-portfolio-text">{node.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RoadMap
