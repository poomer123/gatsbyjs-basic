import React from 'react'

export default function ({ pageContext }) {
    const { album } = pageContext
    return <div>
        <h1 className="title">Album</h1>
        <h1>Album name: {album.title}</h1>
    </div>
}