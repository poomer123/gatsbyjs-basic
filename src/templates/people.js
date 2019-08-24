import React from 'react'
import { Link } from 'gatsby'

export default function ({ pageContext }) {
    const { peopleList } = pageContext

    return <div>
        <h1>People List</h1>
        {peopleList.map( 
            (people, i) => <p key={i}>
                <Link to={`/${people.toLowerCase()}`}>{people}</Link>
            </p>
        )}
    </div>
}