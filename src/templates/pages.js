import React from 'react'
import { Link } from 'gatsby'

export default function ({ pageContext }) {
    const { pages } = pageContext
    return <div>
        <h1 className="title">Pages site map</h1>
        <ol>
            {pages &&
                pages.map( page => 
                    <li key={page.id}>
                        <Link to={page.path}>
                            {page.id}
                        </Link>
                    </li>
                )
            }
        </ol>
    </div>
}