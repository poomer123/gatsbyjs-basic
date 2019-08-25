import React from 'react'
import { graphql, Link } from 'gatsby'

export default function ({ data }) {
    const { edges } = data.allSitePage

    return <div>
        <h1 className="title">Site map</h1>
        <ol>
            {edges &&
                edges.map( ({node}) => 
                    <li key={node.id}>
                        <Link to={node.path}>
                            {node.id}
                        </Link>
                    </li>
                )
            }
        </ol>
    </div>
}

export const query = graphql`
    query {
        allSitePage {
            edges {
                node {
                    id
                    path
                }
            }
        }
    }
`