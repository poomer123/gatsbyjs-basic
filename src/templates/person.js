import React from 'react'

export default function ({ pageContext }) {
    return <div>
        <h1>Person: {pageContext.name}</h1>
    </div>
}